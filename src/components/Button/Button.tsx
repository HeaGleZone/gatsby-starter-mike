import React from 'react';
import { navigate } from 'gatsby';

import { ButtonStyled } from './styles';

interface Props {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  anchorTo?: string;
  styles?: {
    color: string;
    background: string;
  };
}

const Button: React.FC<Props> = ({ children, onClick, anchorTo, styles }) => {
  const moveToPage = () => {
    navigate(anchorTo as string);
  };

  return (
    <ButtonStyled
      onClick={onClick || moveToPage}
      styles={styles || { color: 'black', background: 'white' }}
    >
      <p>{children}</p>
    </ButtonStyled>
  );
};

export default Button;
