import React, { useEffect, useState } from 'react';
import { navigate } from 'gatsby';
import { IoMdSettings } from 'react-icons/io';

import { NavbarStyled, NavbarExtended, Logo } from './styles';

import { generateLinks } from '../../utils/generateLinks';
import NavbarWrapped from './NavbarWrapped';

interface ThemeButtonProps {
  openThemesModal: React.MouseEventHandler<SVGElement>;
}

interface NavbarProps extends ThemeButtonProps {
  logoSrc?: string;
}

const ThemeButton: React.FC<ThemeButtonProps> = ({ openThemesModal }) => (
  <IoMdSettings onClick={openThemesModal} />
);

const Navbar: React.FC<NavbarProps> = ({ logoSrc, openThemesModal }) => {
  const [isWrapped, setMenuSize] = useState(false);

  // Check state before any zoom
  useEffect(() => {
    handleNavbarOverflow();
  }, []);

  // Check if zoom overflows
  useEffect(() => {
    window.addEventListener('resize', handleNavbarOverflow, true);

    return () => {
      window.removeEventListener('resize', handleNavbarOverflow, true);
    };
  });

  const handleNavbarOverflow = () => {
    const navbar: HTMLElement = document.getElementById(
      'navbar-extended'
    ) as HTMLElement;

    const navbarElements: NodeListOf<Element> = document.querySelectorAll(
      '#navbar-extended > *'
    );

    const logo: HTMLElement = document.getElementById('logo') as HTMLElement;

    let navbarElementsWidth = 0;
    for (let i = 0; i < navbarElements.length; i++) {
      navbarElementsWidth += navbarElements[i].clientWidth;
    }

    setMenuSize(
      navbar.clientWidth - (logo.clientWidth + 100) < navbarElementsWidth
    );
  };

  return (
    <NavbarStyled>
      <NavbarExtended isHidden={isWrapped} id="navbar-extended">
        <Logo
          isWrapped={false}
          id="logo"
          image={logoSrc}
          onClick={() => navigate('/')}
        />
        {generateLinks()}
        <ThemeButton openThemesModal={openThemesModal} />
      </NavbarExtended>

      <NavbarWrapped
        isHidden={!isWrapped}
        id="navbar-wrapped"
        logoImg={logoSrc}
      >
        <ThemeButton openThemesModal={openThemesModal} />
        {generateLinks()}
      </NavbarWrapped>
    </NavbarStyled>
  );
};

export default Navbar;
