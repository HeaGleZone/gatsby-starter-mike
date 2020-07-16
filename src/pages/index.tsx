import React from 'react';

import { ServiceCard, Contact, Address } from '../components/';
import { Layout, Socials, Section, OpeningHours, Infos } from '../containers/';

const IndexPage: React.FC = () => (
  <Layout showHero>
    <Socials />
    <Infos>
      <section>
        <Contact type="phone" value="999 9999999" />
        <Contact type="social" value="FB Messenger" />
        <Contact type="mail" value="some@mail.com" />
      </section>
      <Address>
        <p>Something Street 99</p>
        <p>Some place, Earth</p>
      </Address>
    </Infos>

    <OpeningHours />
    <Section title="Services">
      <ServiceCard
        name="Qualcosa"
        anchorTo="/"
        leftInfo="10 €"
        rightInfo="1 h"
        image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.roberthalf.com%2Fsites%2Fdefault%2Ffiles%2F2017-12%2FSystems%2520Analyst.jpg&f=1&nofb=1"
      />
      <ServiceCard
        name="L'aranciante è il nuovo arancione"
        anchorTo="/"
        leftInfo="6 €"
        rightInfo="2&#189; h"
        image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.lifeofpix.com%2Fwp-content%2Fuploads%2F2018%2F08%2F308-name05903-chim-1600x989.jpg&f=1&nofb=1"
      />
      <ServiceCard
        name="Something else"
        anchorTo="/"
        leftInfo="100 €"
        rightInfo="&#189; h"
        image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.plant.ca%2Fwp-content%2Fuploads%2F2018%2F05%2FStandupjobssafetyFotolia166237510.jpg&f=1&nofb=1"
      />
      <ServiceCard
        name="Cool service here"
        anchorTo="/"
        leftInfo="40 €"
        rightInfo="2 h"
        image="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fs17026.pcdn.co%2Fwp-content%2Fuploads%2Fsites%2F9%2F2017%2F03%2FBuying-and-selling-a-business-634x0-c-default.jpeg&f=1&nofb=1"
      />
      <ServiceCard
        name="Service"
        anchorTo="/"
        leftInfo="12€"
        rightInfo="1&#190; h"
        image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.techdonut.co.uk%2Fsites%2Fdefault%2Ffiles%2Fhow-to-brief-a-web-designer-388161091.jpg&f=1&nofb=1"
      />
      <ServiceCard
        name="This looks cool"
        anchorTo="/"
        leftInfo="8 €"
        rightInfo="&#190; h"
        image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FgBV0wehj9YE%2Fmaxresdefault.jpg&f=1&nofb=1"
      />
    </Section>
  </Layout>
);

export default IndexPage;
