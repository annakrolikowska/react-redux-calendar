import React from 'react';
import CalendarUl from './CalendarUl/CalendarUl.js';
import Link from './Link/Link';
import Button from './Button';
import {deleteMeetingAction} from '../actions/calendar'
import { connect } from 'react-redux'

class CalendarList extends React.Component {   


    render() {
        return (<CalendarUl>{ this.renderMeetingsList() }</CalendarUl>)
    }

    renderMeetingsList() {
        return this.props.meetings.map(item => 
            this.renderMeetingsItem(item)
        );
    }

    removeMeeting  = (id) => {
        if (window.confirm("Czy na pewno chcesz usunąć spotkanie?") == true) {
           this.props.deleteMeeting(id)
        } else alert('Usuwanie spotkania zostało anulowane')
    }

    renderMeetingsItem(meeting) {
        return (
            <li key={meeting.id} id={meeting.id} >
                <div>
                 <Button type='delete' onClick={() => this.removeMeeting(meeting.id)}>
                        <img src='https://cdn-icons-png.flaticon.com/512/1828/1828527.png' width='20px' height='20px'/>
                </Button> 
                 </div>
                <p>Meeting with...</p>
                 <Link href={`mailto: ${meeting.email}`}>
                    {meeting.firstName} {meeting.lastName}
                </Link>
                <p>{meeting.date}</p>
                <p>{meeting.time}</p>

            </li>
            
        )
    }
}

const mapStateToProps = (state) => {
    return {
        meetings: state.meetings,
        
    }
}

const mapActionToProps = {
    deleteMeeting: deleteMeetingAction,
 }

 export default connect(mapStateToProps, mapActionToProps)(CalendarList)

