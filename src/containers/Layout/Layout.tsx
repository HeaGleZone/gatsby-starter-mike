import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import { mainTheme } from '../../themes/main-theme';
import { secondaryTheme } from '../../themes/secondary-theme';

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
  const [currentTheme, setCurrentTheme] = useState() || useTheme();
  const theme = useTheme(currentTheme);

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
