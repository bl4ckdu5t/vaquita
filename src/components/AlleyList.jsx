import React from 'react';
import { Grid, GridCol } from 'griz';
import styled from 'styled-components';

import Image from '../utils/image';

const AlleyFrame = styled.div``;

const AlleyList = (props: any) => (
  <Grid responsiveMd>
    { props.items.map(item => (
      <GridCol key={item.key} column="33.3">
        <AlleyFrame>
          <Image src={item.image} alt={item.title} />
          <h3>{item.title}</h3>
        </AlleyFrame>
      </GridCol>
    )) }
  </Grid>
);

export default AlleyList;
