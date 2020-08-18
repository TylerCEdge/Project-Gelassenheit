import React from 'react';

import '../css/CustomContainer.css';
import '../css/TextStyles.css';
import '../css/Journal.css';

import { AbsoluteCenter } from '../components/Positioning/AbsoluteCenter';

const Journal = () => {
  return (
    <React.Fragment>
      <AbsoluteCenter>
        <ul className='journal color-mod' id='custom-container'>
          <li className='journal-entry'>
            <h6>August 15th 2020</h6>
            <p>
              I won't be barred from learning. Here there are no limits. Here I
              get to express myself without judgement!!!
            </p>
          </li>
          <hr />
          <li className='journal-entry'>
            <h6>August 16th 2020</h6>
            <p>
              I didn't feel so great about myself this morning. It feels like
              maybe I'm not doing the right thing.
            </p>
          </li>
          <li className='journal-entry'>
            <h6>August 18th 2020</h6>
            <p>I really hate potato chips.</p>
          </li>
        </ul>
      </AbsoluteCenter>
    </React.Fragment>
  );
};

export default Journal;
