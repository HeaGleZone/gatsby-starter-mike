import React from 'react';

import { Social } from '../components';

import { useSocials } from '../queries/useSocials';

interface DefaultSocialsProps {
  isSmall?: boolean;
}

export const DefaultSocials: React.FC<DefaultSocialsProps> = ({ isSmall }) => {
  const socialsInfo = useSocials();

  interface SocialInfo {
    link: string;
    image: string;
  }

  const generateSocialsElements = () =>
    React.Children.toArray(
      socialsInfo.map((socialInfo: SocialInfo) => (
        <Social
          href={socialInfo.link}
          image={loadSocialImage(socialInfo.image)}
          isSmall={isSmall}
        />
      ))
    );

  return <>{generateSocialsElements()}</>;
};

export const loadSocialImage = (imageName: string): string => {
  const imageSrc: string = require(`../images/icons/${imageName}`);

  return imageSrc;
};
