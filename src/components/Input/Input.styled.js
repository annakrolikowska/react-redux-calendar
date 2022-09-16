import styled, {css} from 'styled-components';

const StyledInput = styled.input`


	width: 180px;
	height: 32px;
	padding: 4px 8px 4px 8px;
	box-shadow: -4px 3px 0px rgba(0, 0, 0, 0.32);
	background: #ffffff;
	border-color: #232323;
	border-width: 1px;
	border-style: solid;
	border-radius: 3px 3px 3px 3px;
	font-family: "Helvetica";
	font-weight: 400;
	font-size: 14px;
	text-align: left;
    margin-right: 15px;
	text-align: center;

	&::placeholder {
		color: #c0c0c0;
	}
    
    &:hover {
        cursor: pointer;
     
    }
    
    &:focus-visible {
        outline: 0;
        box-shadow: inset 6px 6px 8px 0 rgba(0, 0, 0, 0.2),
        inset -5px -5px 8px 0 rgba(255, 255, 255, 0.5);  
    }


`
export { StyledInput };
