

export const loadMeetingsAction = (meetings) => ({
    type: 'loadMeetings',
    payload: {meetings}
})

export const saveMeetingAction = (meeting) => ({
    type: 'saveMeeting',
    payload: {meeting}
})

export const deleteMeetingAction = (id) => ({
    type: 'deleteMeeting',
    payload: {id}
})

