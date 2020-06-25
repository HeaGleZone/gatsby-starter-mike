import React from 'react';
import { navigate } from 'gatsby';

import { ButtonStyled } from './styles';

interface Props {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  anchorTo?: string;
}

const Button: React.FC<Props> = ({ children, onClick, anchorTo }) => {
  const moveToPage = () => {
    navigate(anchorTo as string);
  };

  return (
    <ButtonStyled onClick={onClick}>
      <p>{children}</p>
    </ButtonStyled>
  );
};

export default Button;
