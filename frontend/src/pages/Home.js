import React from 'react';

import '../css/Home.css';

import { AbsoluteCenter } from '../components/Positioning/AbsoluteCenter';
import Mantra from '../components/Mantra';

const Home = () => {
  return (
    <AbsoluteCenter>
      <div id='mantra-container'>
        <Mantra />
      </div>
    </AbsoluteCenter>
  );
};

export default Home;
