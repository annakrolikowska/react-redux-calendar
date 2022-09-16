import React from 'react';
import { StyledCalendarContainer } from './CalendarContainer.styled';

const CalendarContainer = props => {
    
    return (
        <StyledCalendarContainer>{props.children}</StyledCalendarContainer>
    );
}

export default CalendarContainer;