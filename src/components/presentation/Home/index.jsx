import React from 'react';
import styled from 'styled-components';
import '../../../styles.css';

import Button from '../../ui/Button';

const Hero = styled.div`
  position: relative;
  background: linear-gradient(to bottom, var(--brand-color-1), var(--brand-color-2));
  height: 67rem;
  padding: 6rem 2rem 2rem;
  color: #fff;
  text-align: center;
  clip-path: polygon(0 100%, 0 0, 100% 0, 100% calc(100% - 100px));
  header{
    margin-bottom: 10rem;
  }
`;

const Process = styled.section`
  padding: 4rem 2rem;
  text-align: center;
  color: #fff;
  h2{
    color: #354c65;
  }
`;

const Alleys = Process.extend`
  background: #0c3050;
  h2{
    color: #304F71;
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
    <Process>
      <h2>Share design for feedbacks</h2>
      <h1>Constructive feedbacks with love</h1>
    </Process>
    <Alleys>
      <h2>Start making hoops</h2>
    </Alleys>
    <Footer>
      <p>Copyright 2017 Vaquita</p>
    </Footer>
  </div>
);

export default Home;
