import React from 'react';

import './image.css';

const Image = () => {
  return (
    <React.Fragment>
      <div className='text-center'>
        <img
          src={require('../images/tylerUpdated.jpg')}
          className='rounded'
          alt='Tyler Edge Headshot'
        />
      </div>
    </React.Fragment>
  );
};

export default Image;
