import React from 'react';
import { navigate } from 'gatsby';

import { ButtonStyled } from './styles';

interface Styles {
  color: string;
  background: string;
}
interface Props {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  anchorTo?: string;
  styles?: Styles;
}

const Button: React.FC<Props> = ({ children, onClick, anchorTo, styles }) => {
  const moveToPage = () => {
    navigate(anchorTo as string);
  };

  const btnStyles: Styles = styles || { color: 'black', background: 'white' };

  // Check external links
  const isInternal: boolean = /^\/(?!\/)/.test(anchorTo as string);

  if (isInternal) {
    return (
      <ButtonStyled onClick={onClick || moveToPage} styles={btnStyles}>
        <p>{children}</p>
      </ButtonStyled>
    );
  }

  return (
    <a href={anchorTo} target="_blank" rel="nofollow noopener noreferrer">
      <ButtonStyled styles={btnStyles}>
        <p>{children}</p>
      </ButtonStyled>
    </a>
  );
};

export default Button;
