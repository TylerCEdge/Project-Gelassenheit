import React from 'react';

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
