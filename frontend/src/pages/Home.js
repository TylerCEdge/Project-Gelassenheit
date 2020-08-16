import React from 'react';

import '../css/Home.css';
import '../css/CustomContainer.css';

import { AbsoluteCenter } from '../components/Positioning/AbsoluteCenter';
import Mantra from '../components/Mantra';

const Home = () => {
  return (
    <AbsoluteCenter>
      <div className='color-mod' id='custom-container'>
        <Mantra />
      </div>
    </AbsoluteCenter>
  );
};

export default Home;
