import React from 'react';
import { connect } from 'react-redux'
import { loadMeetingsAction, saveMeetingAction } from '../actions/calendar';
import CalendarList from './CalendarList'
import CalendarForm from './CalendarForm';
import CalendarContainer from './CalendarContainer/CalendarContainer';
import CalendarApi from '../providers/CalendarApi'
import Header from './Header';


class Calendar extends React.Component { 
    
    calendarProvider = new CalendarApi()

    componentDidMount = () => {
        this.calendarProvider.loadMeetingsFromApi()
            .then((meetings) => {
                this.props.loadMeetings(meetings)})
    }

    saveMeeting = (meeting) => {
		this.calendarProvider.sendMeetingToApi(meeting).then((data) => this.props.addMeetingToState(data));
	}


    render() {
        return (
            <>
                <Header>
                    <div className='header_container'>
                        <img src='https://cdn-icons-png.flaticon.com/512/591/591607.png' width='75px' height='75px'/>
                        <h1> Meeting Calendar</h1>
                    </div> 
                    <CalendarForm saveMeeting={this.saveMeeting}/>
                </Header>
                <CalendarContainer>
                    <CalendarList meetings={ this.props.meetings } />
                </CalendarContainer>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        meetings: state.meetings
    }
}

const mapActionToProps = {
    loadMeetings: loadMeetingsAction,
    addMeetingToState: saveMeetingAction
 }

export default connect(mapStateToProps, mapActionToProps)(Calendar);