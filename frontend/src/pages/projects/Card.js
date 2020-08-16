import React from 'react';

import { AbsoluteCenter } from '../../components/Positioning/AbsoluteCenter';
import '../../css/TextStyles.css';

const Card = () => {
  return (
    <AbsoluteCenter>
      <h5 className='color-mod'>Card</h5>
      <hr />
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
      <hr />
    </AbsoluteCenter>
  );
};
export default Card;

// Image to change to Kim Kardashian on button click.
// Card title and text to change to bio info on button click
