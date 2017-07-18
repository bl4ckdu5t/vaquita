import React from 'react';
import styled from 'styled-components';
import { Grid, GridCol } from 'griz';
import '../styles.css';

import Button from '../utils/button';
import AlleyList from './AlleyList';

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
    height: 10rem;
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg width=%22100%25%22 height=%22100%22 viewBox=%220 0 800 600%22 xmlns=%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 preserveAspectRatio=%22none%22%3E%3Cpath d=%22M800 0v600H0L800 0z%22 fill=%22%23092238%22%2F%3E%3C%2Fsvg%3E");
  }
  header{
    margin-bottom: 10rem;
  }
`;

const Process = styled.section`
  position: relative;
  min-height: 50rem;
  padding: 4rem 2rem;
  text-align: center;
  color: #fff;
  h2{
    color: #354c65;
  }
  &::after{
    content: '';
    position: absolute;
    bottom: -1px;
    left: 0;
    z-index: 1;
    width: 100%;
    height: 10rem;
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 800 600' preserveAspectRatio='none' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath d='M0%2C0l0%2C600l800%2C0l-800%2C-600Z' style='fill:%230c3050%3B'/%3E%3C/svg%3E");
  }
`;

const Alleys = Process.extend`
  padding: 4rem;
  background: #0c3050;
  &::after{
    display: none;
  }
  h2{
    color: #304F71;
  }
`;

const Footer = styled.div`
  padding: 2rem;
  color: #9EB0C3;
`;

const recentUploads = [
  { image: 'http://placehold.it/400', title: 'Item A', key: 1 },
  { image: 'http://placehold.it/400', title: 'Item B', key: 2 },
  { image: 'http://placehold.it/400', title: 'Item C', key: 3 },
  { image: 'http://placehold.it/400', title: 'Item D', key: 4 },
  { image: 'http://placehold.it/400', title: 'Item E', key: 5 },
  { image: 'http://placehold.it/400', title: 'Item F', key: 6 },
];

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
      <AlleyList items={recentUploads} />
    </Alleys>
    <Footer>
      <p>© Copyright 2017 Vaquita</p>
    </Footer>
  </div>
);

export default Home;
