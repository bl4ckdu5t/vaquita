import React from 'react';
import styled from 'styled-components';
import { Grid, GridCol } from 'griz';
import '../../styles.css';

import Button from '../../utils/button';

const Hero = styled.div`
  position: relative;
  background: linear-gradient(to bottom, var(--brand-color-1), var(--brand-color-2));
  height: 67rem;
  padding: 6rem 2rem 2rem;
  color: #fff;
  text-align: center;
  &::after{
    content: '';
    position: absolute;
    bottom: -1px;
    left: 0;
    z-index: 1;
    width: 100%;
    height: 100px;
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg width=%22100%25%22 height=%22100%22 viewBox=%220 0 800 600%22 xmlns=%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 preserveAspectRatio=%22none%22%3E%3Cpath d=%22M800 0v600H0L800 0z%22 fill=%22%23092238%22%2F%3E%3C%2Fsvg%3E");
  }
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
        <Grid responsiveMd>
          <GridCol column="10">
            <span>AlleyHoop</span>
          </GridCol>
          <GridCol column="90">
            <span>AlleyHoop</span>
          </GridCol>
        </Grid>
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
