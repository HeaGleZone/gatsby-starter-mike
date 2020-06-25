import React from 'react';
import { ThemeProvider } from 'styled-components';

import { mainTheme } from '../../themes/main-theme';

import '../../themes/index.css';
import GlobalStyle from '../../themes/global-style';
import { MainContainer } from './styles';

import { Navbar } from '../../components';
import { Hero } from '../';

interface Props {
  allowAsides?: {
    left?: boolean;
    right?: boolean;
  };
  mainFlex?: number;
}

const defaultProps: Props = {
  allowAsides: {
    left: false,
    right: false,
  },
  mainFlex: 4,
};

const Layout: React.FC<Props> = ({
  children,
  allowAsides = defaultProps.allowAsides,
  mainFlex = defaultProps.mainFlex,
}) => (
  <ThemeProvider theme={mainTheme}>
    <GlobalStyle />
    <header>
      <Navbar />
      <Hero />
    </header>
    <MainContainer allowAsides={allowAsides} mainFlex={mainFlex as number}>
      <aside></aside>
      <main>{children}</main>
      <aside></aside>
    </MainContainer>
  </ThemeProvider>
);

export default Layout;
