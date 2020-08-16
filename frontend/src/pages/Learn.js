import React from 'react';

import '../css/CustomContainer.css';

import Eiffel from '../pages/projects/Eiffel';
import Card from '../pages/projects/Card';

const Learn = () => {
  return (
    <React.Fragment>
      <div id='custom-container'>
        <Eiffel />
      </div>
      <div id='custom-container'>
        <Card />
      </div>
    </React.Fragment>
  );
};

export default Learn;

// I would like for this page to render cards using map to render my micro projects into the viewport
