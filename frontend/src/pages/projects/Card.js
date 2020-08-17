import React, { useState } from 'react';

import './Card.css';

import { AbsoluteCenter } from '../../components/Positioning/AbsoluteCenter';
import '../../css/TextStyles.css';

const Card = () => {
  const [text, setText] = useState('');
  const [isClicked, setIsClicked] = useState(false);

  function onClickHandler() {
    var img = document.getElementById('kard');
    img.style.transform = 'rotate(180deg)';
    // I want to hide the cursor here
    // I want to render an image of Kim Kardashian to replace the Meeseeks image.
    // I want to render some bio info housed in an array for Kim.
  }
  return (
    <AbsoluteCenter>
      <h5 className='color-mod'>Card</h5>
      <hr />
      <div className='card mx-auto' style={{ width: '18rem' }}>
        <img
          src='https://avatarfiles.alphacoders.com/220/thumb-220030.jpg'
          className='card-img-top'
          id='kard'
          alt='Placeholder Image'
        />
        <div className='card-body'>
          <h5 className='card-title'>Card title</h5>
          <p className='card-text'>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <button className='btn btn-primary' onClick={onClickHandler}>
            Go somewhere
          </button>
        </div>
      </div>
      <hr />
    </AbsoluteCenter>
  );
};
export default Card;

// Image to change to Kim Kardashian on button click.
// Card title and text to change to bio info on button click
