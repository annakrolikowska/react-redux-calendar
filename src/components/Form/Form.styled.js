import styled, {css} from 'styled-components';

const StyledForm = styled.form`
    justify-content: center;
    text-align: center;
    align-items: center;
    padding: 0.75rem 1.25rem;
    border-radius: 5px;
    margin: 0 auto; 

	width: 726px;
	height: 234px;
	padding: 8px 8px 8px 8px;
	box-shadow: -4px 3px 0px rgba(0, 0, 0, 0.32);
	background: #ffffff;
	border-color: #000000;
	border-width: 1px;
	border-style: solid;

    & .formInputs_container {
        margin-top: 50px;
        display: flex;
        flex-wrap: wrap;
        text-align: center;
        align-items: center;
        padding-left: 15px;
    };

    
    @media (max-width: 855px) {

        width: 500px;
        height: 340px;
    }

       
    @media (max-width: 655px) {

        width: 300px;
        height: 540px;
        justify-content: center;

        & .formInputs_container {
        margin-top: 50px;
        justify-content: center;
    };


}


`

export { StyledForm };