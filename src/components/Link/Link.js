import React from 'react';
import { StyledLink } from './Link.styled';

const Link = props => {

    const {href}= props
    return (
        <StyledLink href={href} >{props.children}</StyledLink>
    );
}

export default Link;