import React from 'react';

import './Mantra.css';

const Mantra = (props) => {
  return (
    <React.Fragment>
      <h3 className='text-center' id='line-one'>
        The first rule of Project Gelassenheit is: ...
      </h3>
      <h5 id='line-two'>tHeRe aRe nO Rules ...</h5>
      <button className='btn btn-primary' id='explore'>
        Dare To Explore
      </button>
    </React.Fragment>
  );
};

export default Mantra;
