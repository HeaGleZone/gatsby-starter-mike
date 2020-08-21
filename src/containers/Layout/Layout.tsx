import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import { ThemeProvider } from 'styled-components';
import CookieConsent from 'react-cookie-consent';

import HeroContent from './HeroContent';

import '../../themes/index.css';
import GlobalStyle from '../../themes/global-style';

import { Navbar, Footer, ThemeModal, BackToTop, SEO } from '../../components';

import logoImg from '../../images/gatsby.png';

import themes from '../../themes/themes';

interface Props {
  showHero?: boolean;
  noScriptMsg?: string;
  SEOComponent?: React.ReactElement;
  allowPadding?: boolean;
}

const defaultProps = {
  showHero: false,
  mainFlex: 4,
};

const isWebsiteThemed = (): boolean => Object.keys(themes).length > 1;

const Layout: React.FC<Props> = ({
  children,
  showHero = defaultProps.showHero,
  noScriptMsg = 'JavaScript is disabled, theme changing and other functionalities may not work.',
  SEOComponent,
  allowPadding = true,
}) => {
  const [showThemeModal, setThemeModalState] = useState<boolean>(false);

  const [currentTheme, setTheme] = useState<string>('main');

  useEffect(() => {
    setTheme(window.localStorage.getItem('theme') || 'main');
  }, []);

  useEffect(() => {
    window.localStorage.setItem('theme', currentTheme);
  }, [currentTheme]);

  const setNewTheme = (newTheme: string) => {
    setTheme(newTheme);
  };

  return (
    <ThemeProvider theme={themes[currentTheme]}>
      {SEOComponent || <SEO />}
      <GlobalStyle />
      <BackToTop />
      <CookieConsent
        enableDeclineButton
        location="bottom"
        buttonText="Accept"
        declineButtonText="Decline"
        cookieName="gatsby-gdpr-google-analytics"
        cookieSecurity
      >
        This site uses cookies... {` `}
        <Link to="/privacy/">Read more about privacy.</Link>
      </CookieConsent>
      <header>
        {showThemeModal && (
          <ThemeModal
            changeTheme={(newTheme: string): void => {
              setNewTheme(newTheme);
            }}
            setVisibility={(): void => {
              setThemeModalState(false);
            }}
          />
        )}
        <Navbar
          logoSrc={logoImg}
          openThemesModal={() => setThemeModalState(true)}
          allowTheming={isWebsiteThemed()}
        />
        <noscript>
          <p>{noScriptMsg}</p>
        </noscript>
        {showHero && <HeroContent />}
      </header>
      <main className={allowPadding ? 'general-content' : 'home-content'}>
        {children}
      </main>
      <Footer logoSrc={logoImg} logoBackground="white"></Footer>
    </ThemeProvider>
  );
};

export default Layout;
