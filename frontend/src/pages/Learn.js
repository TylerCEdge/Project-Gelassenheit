import React from 'react';

import '../css/CustomContainer.css';

import Container from '../components/Container';
import HelloWorld from '../pages/projects/HelloWorld';

const Learn = () => {
  return (
    <div id='custom-container'>
      <Container>
        <HelloWorld />
      </Container>
    </div>
  );
};

export default Learn;
