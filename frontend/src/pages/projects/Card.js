import React, { useState } from 'react';

import './Card.css';

import { AbsoluteCenter } from '../../components/Positioning/AbsoluteCenter';
import '../../css/TextStyles.css';

const KIM = {
  name: 'Kim Kardashian',
  about:
    'Kimberly Noel Kardashian West is an American media personality, socialite, model, businesswoman, and actress. Kardashian first gained media attention as a friend and stylist of Paris Hilton but received wider notice after a 2002 sex tape, Kim Kardashian, Superstar, with her then-boyfriend Ray J was released in 2007.',
};

const Card = () => {
  const [text, setText] = useState('');
  const [isClicked, setIsClicked] = useState(false);

  function onClickHandler() {
    var img = document.getElementById('kard');
    img.setAttribute(
      'src',
      'https://media1.s-nbcnews.com/i/newscms/2020_34/3405133/200817-kim-kardashian-mn-1120_1e37c86a42b1f9fa945ec8ed023498db.jpg'
    );
    document.getElementById('kard-title').innerHTML = KIM.name;
    document.getElementById('kard-text').innerHTML = KIM.about;
    setText('Dashian');
    // I want to hide the cursor here
    // I want to render an image of Kim Kardashian to replace the Meeseeks image.
    // I want to render some bio info housed in an array for Kim.
  }
  return (
    <AbsoluteCenter>
      <h5 className='color-mod'>Card {text}</h5>
      <hr />
      <div className='card mx-auto' style={{ width: '18rem' }}>
        <img
          src='https://avatarfiles.alphacoders.com/220/thumb-220030.jpg'
          className='card-img-top'
          id='kard'
          alt='Placeholder Image'
        />
        <div className='card-body'>
          <h5 className='card-title' id='kard-title'>
            Card title
          </h5>
          <p className='card-text' id='kard-text'>
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
