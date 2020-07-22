import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Ubuntu', sans-serif;
  }

  noscript {
    display: block;
    width: 100%;
    background: #f44336;
    padding: 10px;
    box-sizing: border-box;
    text-align: center;

    & p {
      color: white;
      margin: 0;
    }
}

  body, html {
    margin: 0;
    padding: 0;
    width: 100%;
    background:${props => props.theme.backgrounds.primary};
    color: ${props => props.theme.paragraph.primary};
    overflow-y: auto;
  }

  a, p, li {
    font-size: 18px;
    line-height: 1.6em;   
    color: ${props => props.theme.paragraph.primary};
  }

  h1, h2, h3, h4, h5, h6 {    
    color: ${props => props.theme.headline.primary};
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
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    & > section {
      margin-bottom: 80px;
    }

    & > section:last-child {
      margin-bottom: 0;
    }
  }

  section {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    background: ${props => props.theme.backgrounds.secondary};
    box-sizing: border-box;
    padding: 40px;

    & a, p, li {
      color: ${props => props.theme.paragraph.primary};
    }

    & h1, h2, h3, h4, h5, h6 {    
      color: ${props => props.theme.headline.secondary};
    }
  }  

  section.transparent {
    background: transparent;
  }

  .section-title {
    color: ${props => props.theme.headline.primary};
    text-align: center;
    box-sizing: border-box;
    width: 100%;
    margin: 0;
    padding: 0px 0 20px 0;
  }

  .section-title ~ .secondary {
    padding: 80px 0 20px 0;
    background: ${props => props.theme.backgrounds.secondary};
    color: ${props => props.theme.headline.secondary};

    @media all and (max-width: 800px) {
      padding: 60px 0 20px 0;
    }
  }

  @media all and (max-width: 800px) {
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

    main {
      & > section {
        margin-bottom: 60px;
      }
    }

    section.socials {
      padding: 0px;
    }
  }
`;

export default GlobalStyle;
