import React, { useState } from 'react';
import { DefaultTheme } from 'styled-components';
import { ThemeProvider } from 'styled-components';

import HeroContent from './HeroContent';

import '../../themes/index.css';
import GlobalStyle from '../../themes/global-style';

import { useTheme } from '../../hooks/useTheme';

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
}) => {
  const [currentTheme, setCurrentTheme] =
    useState<'main' | 'dark' | undefined>(undefined) || useTheme();
  const theme: DefaultTheme = useTheme(currentTheme);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <header
        onClick={() =>
          currentTheme === 'main'
            ? setCurrentTheme('dark')
            : setCurrentTheme('main')
        }
      >
        <Navbar logoSrc={logoImg} />
        {showHero && <HeroContent />}
      </header>
      <main>{children}</main>
      <Footer logoSrc={logoImg} logoBackground="white"></Footer>
    </ThemeProvider>
  );
};

export default Layout;
