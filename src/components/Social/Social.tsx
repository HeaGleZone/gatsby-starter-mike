import React from 'react';

import { SocialStyled } from './style';

interface Props {
  href: string;
  image: string;
}

const Social: React.FC<Props> = ({ href, image }) => (
  <SocialStyled
    href={href}
    rel="nofollow noopener noreferrer"
    target="_blank"
    image={image}
  />
);

export default Social;
