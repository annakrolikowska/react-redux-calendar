import React from 'react';
import { StyledCalendarUl } from './CalendarUl.styled';

const CalendarUl = props => {

    return (
        <StyledCalendarUl >{props.children}</StyledCalendarUl>
    );
}

export default CalendarUl;

