import React from 'react';
import glamorous from 'glamorous';
import '../../../styles.css';

const Hero = glamorous.div({
  background: '#caa',
  padding: '1rem',
});

const Footer = glamorous.div({
  background: '#348',
  padding: '1rem',
});

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
