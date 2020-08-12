import React from 'react';

import Article from '../Article';
import Aside from '../Aside';

import Container from './styles';

function Main() {
  return (
    <Container>
      <Article />
      <Aside />
    </Container>
  );
}

export default Main;
