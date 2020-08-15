import React from 'react';
import '../css/Journal.css';

import Container from '../components/Container';

const Journal = () => {
  return (
    <React.Fragment>
      <Container>
        <hr />
        <ul className='journal'>
          <li className='journal-entry'>
            <p>
              I won't be barred from learning. Here there are no limits. Here I
              get to express myself without judgement!!!
            </p>
          </li>
        </ul>
      </Container>
    </React.Fragment>
  );
};

export default Journal;
