import React from 'react';

import { SocialStyled, SocialSmallStyled } from './styles';

interface Props {
  href: string;
  image: string;
  isSmall?: boolean;
}

const Social: React.FC<Props> = ({ href, image, isSmall }) => {
  if (isSmall) {
    return (
      <SocialSmallStyled
        href={href}
        rel="nofollow noopener noreferrer"
        target="_blank"
        image={image}
      />
    );
  }

  return (
    <SocialStyled
      href={href}
      rel="nofollow noopener noreferrer"
      target="_blank"
      image={image}
    />
  );
};

export default Social;
