import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body, html {
    margin: 0;
    padding: 0;
  }

  main {
    height: 100%;
    min-height: 100vh;
    background: red;
  }

  aside {
    height: 100%;
    min-height: 100vh;
    background: blue;
  }
`;

export default GlobalStyle;
