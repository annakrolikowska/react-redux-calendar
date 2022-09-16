import React from 'react';
import { StyledLabel } from './Label.styled';

const Label = props => {

    const {type}= props
    return (
        <StyledLabel type={type} >{props.children}</StyledLabel>
    );
}

export default Label;