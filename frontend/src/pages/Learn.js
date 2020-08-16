import React from 'react';

import '../css/CustomContainer.css';

import HelloWorld from '../pages/projects/HelloWorld';
import Eiffel from '../pages/projects/Eiffel';

const Learn = () => {
  return (
    <div id='custom-container'>
      {/* <HelloWorld /> */}
      <Eiffel />
    </div>
  );
};

export default Learn;

// I would like for this page to render cards using map to render my micro projects into the viewport
