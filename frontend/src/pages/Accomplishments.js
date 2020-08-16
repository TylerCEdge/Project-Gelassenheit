import React from 'react';

import '../css/CustomContainer.css';

import { AbsoluteCenter } from '../components/Positioning/AbsoluteCenter';

const Accomplishments = () => {
  return (
    <React.Fragment>
      <AbsoluteCenter>
        <hr />
        <ul className='journal color-mod' id='custom-container'>
          <li className='journal-entry'>
            <p>I made this by myself!!!</p>
          </li>
        </ul>
      </AbsoluteCenter>
    </React.Fragment>
  );
};

export default Accomplishments;
