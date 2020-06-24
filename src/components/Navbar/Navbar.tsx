import React, { useEffect, useState } from 'react';
import { Link } from 'gatsby';

import { NavbarStyled, NavbarExtended } from './styles';

import NavbarWrapped from './NavbarWrapped';

// TODO Add JSON data support
// TODO Add Settings Menu for theme styling
const bigBreakingPoint: number = -1;
const Links = () => (
  <>
    <Link to="/">Home</Link>
    <Link to="/">Some Page</Link>
    <Link to="/">Other page</Link>
    <Link to="/">Blog</Link>
    <Link to="/">About</Link>
  </>
);

const Navbar: React.FC = () => {
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
    const navbar: HTMLElement | null = document.getElementById(
      'navbar-extended'
    );
    const navbarElements: NodeListOf<Element> = document.querySelectorAll(
      '#navbar-extended > a'
    );

    let navbarElementsWidth = 0;
    for (let i = 0; i < navbarElements.length; i++) {
      navbarElementsWidth += navbarElements[i].clientWidth;
    }

    setMenuSize(navbar!.clientWidth < navbarElementsWidth);
  };

  return (
    <NavbarStyled>
      <NavbarExtended isHidden={isWrapped} id="navbar-extended">
        <Links />
      </NavbarExtended>

      <NavbarWrapped isHidden={!isWrapped} id="navbar-wrapped"></NavbarWrapped>
    </NavbarStyled>
  );
};

export default Navbar;
