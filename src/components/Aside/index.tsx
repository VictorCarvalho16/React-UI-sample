import React from 'react';

import Chart from './Chart';
import Deals from './Deals';

import Container from './styles';

function Aside() {
  return (
    <Container>
      <Deals />
      <Chart />
    </Container>
  );
}

export default Aside;
