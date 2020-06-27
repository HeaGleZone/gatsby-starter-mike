import React from 'react';
import { ThemeProvider } from 'styled-components';

import { mainTheme } from '../../themes/main-theme';

import HeroContent from './HeroContent';

import '../../themes/index.css';
import GlobalStyle from '../../themes/global-style';

import { Navbar } from '../../components';
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
  <ThemeProvider theme={mainTheme}>
    <GlobalStyle />
    <header>
      <Navbar />
      {showHero && <HeroContent />}
    </header>
    <main>{children}</main>
  </ThemeProvider>
);

export default Layout;
