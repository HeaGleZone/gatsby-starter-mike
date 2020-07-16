import React from 'react';

import { Social } from '../components';

import { useSocials } from '../queries/useSocials';

interface DefaultSocialsProps {
  isSmall?: boolean;
}

export const DefaultSocials: React.FC<DefaultSocialsProps> = ({ isSmall }) => {
  const socialsInfo = useSocials();

  interface SocialInfo {
    id: string;
    link: string;
    image: string;
  }

  const generateSocialsElements = () =>
    socialsInfo.map(({ id, link, image }: SocialInfo) => (
      <Social
        key={id}
        href={link}
        image={loadSocialImage(image)}
        isSmall={isSmall}
      />
    ));

  return <>{generateSocialsElements()}</>;
};

export const loadSocialImage = (imageName: string): string =>
  require(`../images/icons/${imageName}`);
