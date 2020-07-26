import React, { useState } from 'react';
import { DefaultTheme } from 'styled-components';
import { ThemeProvider } from 'styled-components';

import HeroContent from './HeroContent';

import '../../themes/index.css';
import GlobalStyle from '../../themes/global-style';

import { useTheme } from '../../hooks/useTheme';

import { Navbar, Footer, ThemeModal, BackToTop, SEO } from '../../components';

import logoImg from '../../images/gatsby.png';

interface Props {
  showHero?: boolean;
  noScriptMsg?: string;
  SEOComponent?: React.ReactElement;
}

const defaultProps = {
  showHero: false,
  mainFlex: 4,
};

const Layout: React.FC<Props> = ({
  children,
  showHero = defaultProps.showHero,
  noScriptMsg = 'JavaScript is disabled, theme changing and other functionalities may not work.',
  SEOComponent,
}) => {
  const [showThemeModal, setThemeModalState] = useState<boolean>(false);
  const [currentTheme, setCurrentTheme] = useState<string>(
    useTheme().themeName
  );
  const theme: DefaultTheme = useTheme(currentTheme).theme;

  return (
    <ThemeProvider theme={theme}>
      {SEOComponent || <SEO />}
      <GlobalStyle />
      <BackToTop />
      <header>
        {showThemeModal && (
          <ThemeModal
            changeTheme={(newTheme: string): void => {
              setCurrentTheme(newTheme);
            }}
            setVisibility={(): void => {
              setThemeModalState(false);
            }}
          />
        )}
        <Navbar
          logoSrc={logoImg}
          openThemesModal={() => setThemeModalState(true)}
        />
        <noscript>
          <p>{noScriptMsg}</p>
        </noscript>
        {showHero && <HeroContent />}
      </header>
      <main>{children}</main>
      <Footer logoSrc={logoImg} logoBackground="white"></Footer>
    </ThemeProvider>
  );
};

export default Layout;
