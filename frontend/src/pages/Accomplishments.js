import React from 'react';

import '../css/CustomContainer.css';
import '../css/TextStyles.css';

import { AbsoluteCenter } from '../components/Positioning/AbsoluteCenter';

const Accomplishments = () => {
  return (
    <React.Fragment>
      <AbsoluteCenter>
        <ul className='journal color-mod' id='custom-container'>
          <li className='journal-entry'>
            <h6>August 15th 2020</h6>
            <p>I made this by myself!!!</p>
          </li>
          <hr />
          <li className='journal-entry'>
            <h6>August 16th 2020</h6>
            <p>I styled this by myself!!!</p>
          </li>
          <hr />
          <li className='journal-entry'>
            <h6>August 16th 2020</h6>
            <p>
              I came up with project Eiffel! The first of many micro projects
              where I get to express my creative humor!
            </p>
          </li>
          <hr />
          <li className='journal-entry'>
            <h6>August 16th 2020</h6>
            <p>I completed project Eiffel!!!</p>
          </li>
        </ul>
      </AbsoluteCenter>
    </React.Fragment>
  );
};

export default Accomplishments;
