import React from 'react';

import { DefaultSocials } from './DefaultSocials';

interface Props {
  title?: string;
}

const Socials: React.FC<Props> = ({ title = "Let's get Social!" }) => (
  <>
    <h2 className="section-title">{title}</h2>
    <section className="transparent">
      <DefaultSocials />
    </section>
  </>
);

export default Socials;
