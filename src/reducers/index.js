const initState = {meetings:[]}

const reducer = (state = initState, action) => {
    switch(action.type) {
        case 'loadMeetings':
            return {
                ...state, 
                meetings: action.payload.meetings,
            }
        case 'saveMeeting':
            return {
                ...state, meetings: [...state.meetings, action.payload.meeting],
            }
        case 'deleteMeeting':
            return {
                ...state, meetings: state.meetings.filter((meeting) => meeting.id !== action.payload.id)
            }

        default: 
            return state;
    }
}

export default reducer
