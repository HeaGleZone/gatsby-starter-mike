import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body, html {
    margin: 0;
    padding: 0;
    width: 100%;
    font-family: 'Ubuntu', sans-serif;
    background: ${props => props.theme.backgrounds.secondary};
    color: ${props => props.theme.colors.primary};
  }

  a, p, li {
    font-size: 18px;
    line-height: 1.6em;
    opacity: 0.8;
    color: ${props => props.theme.colors.primary};
  }

  h1, h2, h3, h4, h5, h6 {
    opacity: 0.6;
    color: ${props => props.theme.colors.secondary};
  }

  h1 {
    font-size: 60px;
    margin-bottom: 20px;
  }

  h2 {
    font-size: 32px;
    margin: 20px 0;
  }

  h3 {
    font-size: 24px;
    margin: 20px 0;
  }

  main {
    height: 100%;
    margin-top: 40px;
    margin-bottom: 40px;
    min-height: calc(100vh - 160px);
    box-sizing: border-box;
    padding: 20px;
    background: ${props => props.theme.backgrounds.primary};

    & *:first-child {
      margin-top: 0;
    }
  }

  aside {
    height: 100%;
    margin-top: 40px;
    margin-bottom: 40px;
    min-height: calc(100vh - 160px);
    background: ${props => props.theme.backgrounds.secondary};
    box-sizing: border-box;
    padding: 20px 20px;
  }

  @media all and (max-width: 800px) {
    main {
      margin: 10px;
      min-height: calc(100vh - 80px);
    }

    aside {
      min-height: 0;
    }

    main, aside {
      padding: 20px 10px;
    }

    h1 {
      font-size: 40px;
    }

    h2 {
      font-size: 28px;
      margin: 20px 0;
    }

    h3 {
      font-size: 20px;
      margin: 20px 0;
    }
  }
`;

export default GlobalStyle;
