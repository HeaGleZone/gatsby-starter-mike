import React from 'react';

import { BackToTopStyled } from './styles';
import { IoIosArrowUp } from 'react-icons/io';

const scrollToTop = (): void => {
  // Browsers Support
  const yPos: number =
    document.documentElement.scrollTop || document.body.scrollTop;
  const smoothness = 8;

  if (yPos > 0) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, yPos - yPos / smoothness);
  }
};

const BackToTop: React.FC = () => (
  <BackToTopStyled
    onClick={() => {
      scrollToTop();
    }}
  >
    <IoIosArrowUp />
  </BackToTopStyled>
);

export default BackToTop;
