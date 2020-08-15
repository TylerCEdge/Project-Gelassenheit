import React from 'react';

const Jumbotron = () => {
  return (
    <React.Fragment>
      <div className='jumbotron well'>
        <h1 className='display-7'>Hello, world!</h1>
        <p className='lead'>
          This is a simple hero unit, a simple jumbotron-style component for
          calling extra attention to featured content or information.
        </p>
        <hr className='my-4' />
        <p>
          It uses utility classNamees for typography and spacing to space
          content out within the larger container.
        </p>
        <a className='btn btn-primary' href='/about' role='button'>
          Learn more
        </a>
      </div>
    </React.Fragment>
  );
};

export default Jumbotron;
