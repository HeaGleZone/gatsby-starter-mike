import React from 'react';

import { Navbar, Button } from '../../components';
import { Hero, ButtonGroup } from '../';

const doSomething = () => {
  alert('!');
};

const HeroContent = () => (
  <Hero>
    <h1>Look, I'm a Website!</h1>
    <h2>Feelin' good, mate.</h2>
    <ButtonGroup>
      <Button onClick={doSomething}>Check this out!</Button>
      <Button>About us</Button>
    </ButtonGroup>
  </Hero>
);

export default HeroContent;
