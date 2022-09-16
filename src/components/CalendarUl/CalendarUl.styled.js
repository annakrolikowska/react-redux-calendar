import styled from 'styled-components';

const StyledCalendarUl = styled.ul`

    display: flex;
    flex-wrap: wrap;
    margin-top: 450px;
    width: 1200px;
    justify-content: center;

    & li {
        display: flex;
        flex-direction: column;
        margin-right: 50px;
        margin-top: 50px;
        width: 320px;
        height: 224px;
        padding: 8px 8px 8px 8px;
        box-shadow: -4px 3px 0px rgba(0, 0, 0, 0.32); 
        border: 1px solid #000000;
        text-align: center;
        border-bottom: 5px solid #FFD783;
        border-radius: 5px;;
    }

    p {
        margin: 10px;
    }


    @media (max-width: 655px) {
        margin-top: 600px;
        justify-content: center;
        padding: 0;

        & li { 
            width: 300px;
            margin-right: 0px;
        }
    } 
`

export { StyledCalendarUl };