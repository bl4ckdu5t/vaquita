import React from 'react';
import styled from 'styled-components';
import '../../../styles.css';

const Hero = styled.div`
  background: #4caf3d;
  padding: 1rem;
`;

const Footer = styled.div`
  background: #348;
  padding: 1rem;
`;

const Home = () => (
  <div>
    <Hero>
      <header>
        <span>Logo</span>
      </header>
    </Hero>
    <Footer>
      <p>Copyright 2017 Vaquita</p>
    </Footer>
  </div>
);

export default Home;
