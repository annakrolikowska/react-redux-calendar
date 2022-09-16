import styled from 'styled-components';

const StyledHeader = styled.div`


     background-image: url('https://i.ibb.co/Mg7SfWx/tloo.png');
    background-repeat: no-repeat;
    width: 100%;
    height: 500px;
    margin: 0 auto;
    align-items: center;
    text-align: center;
    justify-content: center;
    margin-top: 0;
    position: absolute;
    
    & h1 {
        margin: 30px;
        opacity: 87%;
        font-size: 2.4rem
    }
    
    /* position: absolute; */

    & .header_container {
    justify-content: center;
    margin: 0 auto;
    margin-top: 20px;
    display: flex;
    text-align: center;
            align-items: center;
    }

    @media (max-width: 855px) {

        & img {
         width: 65px;
         height: 65px;;
        };

        h1 {
            font-size: 2.1rem;
        }
    }



    @media (max-width: 655px) {

        justify-content: center;

        & img {
         width: 35px;
         height: 35px;;
        };

         & h1 {
        margin: 5px;
        font-size: 1.9rem

    }

    & .header_container {
        margin: 20px;
    }


}
    

`

export { StyledHeader };
