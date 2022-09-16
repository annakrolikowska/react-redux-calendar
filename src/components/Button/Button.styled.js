import styled, {css} from 'styled-components';

const StyledButton = styled.button`
    /* text-align: center;
    border: 1px solid transparent;
    background-color: #FFD783;
    color: #FFFFFF;
    padding: 0.375rem 0.95rem;
    border-radius: 5px;
    width: 150px;
    font-size: 1.1rem;
    transition:  .15s ease-in-out;
    box-shadow: 8px 8px 18px 0 rgba(0, 0, 0, 0.2),
    -8px -8px 18px 0 rgba(255, 255, 255, 0.5); */


	width: 180px;
	height: 32px;
	padding: 0px 10px 0px 10px;
	box-shadow: -4px 3px 0px rgba(0, 0, 0, 0.32);
	background: #ffd783;
	color: #232323;
	border-color: #232323;
	border-width: 1px;
	border-style: solid;
	border-radius: 3px 3px 3px 3px;
	font-family: "Helvetica";
	font-weight: 400;
	font-size: 14px;
	text-align: center;
    margin-top:  20px;;
    margin-left: 15px;

    

    &:hover {
        cursor: pointer;
        box-shadow: inset 3px 3px 5px 0 rgba(0, 0, 0, 0.2),
    inset -3px -3px 5px 0 rgba(255, 255, 255, 0.5);  
        
    }
    &:active {
        box-shadow: inset 6px 6px 10px 0 rgba(0, 0, 0, 0.2),
    inset -6px -6px 10px 0 rgba(255, 255, 255, 0.5);
    }

    ${ props => props.type === 'delete' && css`
        margin-top: 0;
        margin-left: 280px;;
        max-width: 20px;
        padding: 1px;
        background-color: transparent;
        box-shadow: none;
        border: none;
        color: red;
        opacity: 60%;
    }

        &:hover {
        cursor: pointer;
        box-shadow: none;
        opacity: 100%;
        
    }

    `};

    @media (max-width: 655px) {
        margin-left: 0;


        ${ props => props.type === 'delete' && css`
        margin-left: 260px;;

 
        `};

    }



`
export { StyledButton };
    