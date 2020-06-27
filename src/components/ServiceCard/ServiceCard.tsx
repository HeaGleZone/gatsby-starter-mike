import React from 'react';

import {
  ServiceCardStyled,
  Image,
  Name,
  InfoBar,
  Button,
  Arrow,
} from './styles';

interface Props {
  name: string;
  anchorTo: string;
  leftInfo: string;
  rightInfo: string;
  image: string;
}

const ServiceCard: React.FC<Props> = ({
  name,
  anchorTo,
  leftInfo,
  rightInfo,
  image,
}) => (
  <ServiceCardStyled>
    <Image image={image} />
    <Name>{name}</Name>
    <Button to={anchorTo}>
      <Arrow />
    </Button>
    <InfoBar>
      <p>{leftInfo}</p>
      <p>{rightInfo}</p>
    </InfoBar>
  </ServiceCardStyled>
);

export default ServiceCard;
