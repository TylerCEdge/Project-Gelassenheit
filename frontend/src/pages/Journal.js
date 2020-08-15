import React from 'react';
import '../css/Journal.css';

import Container from '../components/Container';

const Journal = () => {
  return (
    <React.Fragment>
      <Container>
        <hr />
        <ul className='journal'>
          <li>
            I think every newcomer to development should create something
            similar to this. I think they deserve to have an outlet. I just
            think learning is supposed to be fun. It's supposed to be creative.
            It's a way to express themselves. Good comments isn't the answer. A
            good representation of where someone is at in the learning process
            is. I just think an ever evolving one stop shop is the easiest way
            to gauge someone on that. I think expressing ones self is one of the
            greatest marks of a developer.
          </li>
        </ul>
      </Container>
    </React.Fragment>
  );
};

export default Journal;
