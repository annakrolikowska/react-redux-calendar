import React from 'react';
import { StyledInput } from './Input.styled';

const Input = props => {
    const {name, size, type, placeholder, pattern, value, required, onChange} = props;
    return (
        <StyledInput name={name} value={value} size={size} type={type} pattern={pattern} required={required} placeholder={placeholder} onChange={onChange}>{props.children}</StyledInput>
    );
}

export default Input;