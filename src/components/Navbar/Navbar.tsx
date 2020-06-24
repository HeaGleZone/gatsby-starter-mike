import React, { useEffect, useState } from 'react';
import { Link } from 'gatsby';

import { NavbarStyled, NavbarExtended } from './styles';

import NavbarWrapped from './NavbarWrapped';

import { useNavbarlinks } from '../../queries/useNavbarLinks';

// TODO Add Settings Menu for theme styling
const Navbar: React.FC = () => {
  const [isWrapped, setMenuSize] = useState(false);
  const links = useNavbarlinks();

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

  const generateLinks = () => {
    interface Link {
      path: string;
      name: string;
    }

    return React.Children.toArray(
      links.map(({ path, name }: Link) => <Link to={path}>{name}</Link>)
    );
  };

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
        {generateLinks()}
      </NavbarExtended>

      <NavbarWrapped isHidden={!isWrapped} id="navbar-wrapped">
        {generateLinks()}
      </NavbarWrapped>
    </NavbarStyled>
  );
};

export default Navbar;
