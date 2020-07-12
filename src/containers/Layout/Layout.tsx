import React from 'react';
import { ThemeProvider } from 'styled-components';

import { mainTheme } from '../../themes/main-theme';
import { secondaryTheme } from '../../themes/secondary-theme';

import HeroContent from './HeroContent';

import '../../themes/index.css';
import GlobalStyle from '../../themes/global-style';

import { Navbar, Footer } from '../../components';

import logoImg from '../../images/gatsby.png';

interface Props {
  showHero?: boolean;
}

const defaultProps = {
  showHero: false,
  mainFlex: 4,
};

const Layout: React.FC<Props> = ({
  children,
  showHero = defaultProps.showHero,
}) => (
  <ThemeProvider theme={secondaryTheme}>
    <GlobalStyle />
    <header>
      <Navbar logoSrc={logoImg} />
      {showHero && <HeroContent />}
    </header>
    <main>{children}</main>
    <Footer logoSrc={logoImg} logoBackground="white"></Footer>
  </ThemeProvider>
);

export default Layout;
