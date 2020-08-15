import React from 'react';

const Card = () => {
  return (
    <React.Fragment>
      {/* I didn't know mx-auto would shift to center.  Wondering if there is something similar to do the same with the y axis? */}
      <div className='card mx-auto' style={{ width: '18rem' }}>
        <img
          src='https://avatarfiles.alphacoders.com/220/thumb-220030.jpg'
          className='card-img-top'
          alt='Placeholder Image'
        />
        <div className='card-body'>
          <h5 className='card-title'>Card title</h5>
          <p className='card-text'>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href='/home' className='btn btn-primary'>
            Go somewhere
          </a>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Card;
