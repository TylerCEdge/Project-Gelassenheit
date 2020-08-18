import React from 'react';

import '../css/CustomContainer.css';

import Eiffel from '../pages/projects/Eiffel';
import Card from '../pages/projects/Card';
import Unipollar from '../pages/projects/Unipollar';
import Array from '../pages/projects/Array';

const Learn = () => {
  return (
    <React.Fragment>
      <div id='custom-container'>
        <Eiffel />
      </div>
      <div id='custom-container'>
        <Card />
      </div>
      <div id='custom-container'>
        <Unipollar />
      </div>
      <div id='custom-container'>
        <Array />
      </div>
    </React.Fragment>
  );
};

export default Learn;

// I would like for this page to render cards using map to render my micro projects into the viewport
