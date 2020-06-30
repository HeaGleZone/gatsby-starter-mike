import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body, html {
    margin: 0;
    padding: 0;
    width: 100%;
    font-family: 'Ubuntu', sans-serif;
    background: #eeeeee;
    color: ${props => props.theme.colors.primary};
  }

  a, p, li {
    font-size: 18px;
    line-height: 1.6em;   
    color: ${props => props.theme.colors.primary};
  }

  h1, h2, h3, h4, h5, h6 {    
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
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    & > section {
      margin-bottom: 80px;
    }
  }

  section {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    background: ${props => props.theme.backgrounds.primary};
    box-sizing: border-box;
    padding: 40px;
  }  

  section.transparent {
    background: transparent;
    
    & a, p, li {
      color: ${props => props.theme.colors.primaryAlternative};
    }

    & h1, h2, h3, h4, h5, h6 {    
      color: ${props => props.theme.colors.secondaryAlternative};
    }
  }

  .section-title {
    color: ${props => props.theme.colors.secondaryAlternative};
    text-align: center;
    margin: 20px;
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
