import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body, html {
    margin: 0;
    padding: 0;
    width: 100vw;
    font-family: 'Ubuntu', sans-serif;
    overflow-x: hidden;
  }

  a, p, li {
    font-size: 20px;
    line-height: 1.6em;
  }

  main {
    height: 100%;
    min-height: 100vh;
    box-sizing: border-box;
    padding: 10px 20px;
    background: red;
  }

  aside {
    height: 100%;
    min-height: 100vh;
    background: blue;
  }
`;

export default GlobalStyle;
