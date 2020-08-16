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
            <p>
              I won't be barred from learning. Here there are no limits. Here I
              get to express myself without judgement!!!
            </p>
          </li>
          <hr />
          <li className='journal-entry'>
            <p>
              I didn't feel so great about myself this morning. It feels like
              maybe I'm not doing the right thing.
            </p>
          </li>
        </ul>
      </AbsoluteCenter>
    </React.Fragment>
  );
};

export default Journal;
