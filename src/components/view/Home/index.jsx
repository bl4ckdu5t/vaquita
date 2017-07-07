import React from 'react';
import styled from 'styled-components';
import '../../../styles.css';

import Button from '../../subcomponents/Button';

const Hero = styled.div`
  position: relative;
  background: linear-gradient(to bottom, var(--brand-color-1), var(--brand-color-2));
  height: 67rem;
  padding: 6rem 2rem 2rem;
  color: white;
  text-align: center;
  clip-path: polygon(0 100%, 0 0, 100% 0, 100% calc(100% - 100px));
  header{
    margin-bottom: 10rem;
  }
`;

const Footer = styled.div`
  padding: 1rem;
`;

const Home = () => (
  <div>
    <Hero>
      <header>
        <span>AlleyHoop</span>
      </header>
      <h1>Design reviews for teams and hobbyists</h1>
      <h2 className="light-type">Invite friends to tell you what they think about your design</h2>
      <Button cta>Upload without sign up</Button>
      <p><small className="light-type">You need an account for organized and private alleys</small></p>
    </Hero>
    <Footer>
      <p>Copyright 2017 Vaquita</p>
    </Footer>
  </div>
);

export default Home;
