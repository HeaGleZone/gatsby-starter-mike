import React from 'react';
import { IoIosContact, IoIosMail, IoMdPhonePortrait } from 'react-icons/io';

import { ContactStyled, IconContainer } from './styles';

interface Props {
  type: 'phone' | 'mail' | 'social';
  value: string | number;
  name?: string;
}

const Contact: React.FC<Props> = ({ type, value, name }) => {
  const generateLinkHref = () => {
    switch (type) {
      case 'phone':
        return `tel:${value}`;
      case 'mail':
        return `mailto:${value}`;
      case 'social':
        return value;
    }
  };

  const generateContactIcon = () => {
    switch (type) {
      case 'phone':
        return <IoMdPhonePortrait />;
      case 'mail':
        return <IoIosMail />;
      case 'social':
        return <IoIosContact />;
    }
  };

  return (
    <ContactStyled
      href={generateLinkHref() as string}
      rel="nofollow noopener noreferrer"
      target={type === 'social' ? '_blank' : '_self'}
    >
      <IconContainer>{generateContactIcon()}</IconContainer>
      <h3>{name || value}</h3>
    </ContactStyled>
  );
};

export default Contact;
