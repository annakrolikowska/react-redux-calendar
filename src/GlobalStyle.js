import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
    body {
      margin: 0 auto;
      padding: 0;
      /* width: 1000px; */
      background-color: #EAE8F5;
      font-family: Open-Sans, Helvetica, Sans-Serif;
      background-color: white;
      color: #212121;
    }

    a {
      text-decoration: none;
      color: black;
      }

      h2 {
        font-size: 1.7rem;
      }
`;
 
export default GlobalStyle;