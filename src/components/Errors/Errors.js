import React from 'react';
import { StyledErrors } from './Errors.styled';

const Errors = props => {

const {key} = props 

    return (
        <StyledErrors key={key}>{props.children}</StyledErrors>
    );
}

export default Errors;