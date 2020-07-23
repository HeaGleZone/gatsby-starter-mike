import React from 'react';

import { Social } from '../components';

import { useSocials } from '../queries/useSocials';
import { useSvgImages } from '../queries/useSvgImages';

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

export const loadSocialImage = (imageName: string): string => {
  const svgs: [any] = useSvgImages();

  for (let i = 0; i < svgs.length; i++) {
    if (svgs[i].name === imageName) return svgs[i].publicURL;
  }

  return svgs[0].publicURL || '';
};
