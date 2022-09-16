import React from 'react';
import { StyledForm } from './Form.styled';

const Form = props => {

const {onSubmit, action} = props 

    return (
        <StyledForm action={action} onSubmit={onSubmit}>{props.children}</StyledForm>
    );
}

export default Form;