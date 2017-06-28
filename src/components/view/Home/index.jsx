import React from 'react';
import styled from 'styled-components';
import '../../../styles.css';

import Button from '../../subcomponents/Button';

const brandColor1 = '#238693';
const brandColor2 = 'hsl(212, 65%, 21%)';

const Hero = styled.div`
  position: relative;
  background: linear-gradient(to bottom, ${brandColor1}, ${brandColor2});
  height: 500px;
  padding: 1rem;
  color: white;
  text-align: center;
`;

const Footer = styled.div`
  background: #348;
  padding: 1rem;
`;

const Shaped = styled.div`
  position: absolute;
  left: 0;
  background: #663399;
  height: 10vw;
  width: 100%;
  transform: skewY(-9deg);
  opacity: 0;
`;

const Home = () => (
  <div>
    <Hero>
      <header>
        <span>AlleyHoop</span>
      </header>
      <h1>Design reviews for teams and hobbyists</h1>
      <h2>Invite friends to tell you what they think about your design</h2>
      <Button>Hi there</Button>
      <Shaped />
    </Hero>
    <Footer>
      <p>Copyright 2017 Vaquita</p>
    </Footer>
  </div>
);

export default Home;
