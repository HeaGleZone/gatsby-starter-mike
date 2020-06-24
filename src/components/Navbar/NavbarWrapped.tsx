import React, { useState } from 'react';

import { NavbarWrappedStyled, ContentWrapped } from './styles';

import MenuButton from './MenuButton';

interface Props {
  isHidden: boolean;
  [index: string]: any;
}

const NavbarWrapped: React.FC<Props> = props => {
  const [isOpen, setOpen] = useState(false);

  return (
    <NavbarWrappedStyled {...props}>
      <MenuButton isClicked={isOpen} onClick={() => setOpen(!isOpen)} />
      <ContentWrapped isClicked={isOpen}>{props.children}</ContentWrapped>
    </NavbarWrappedStyled>
  );
};

export default NavbarWrapped;
