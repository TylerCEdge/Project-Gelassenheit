import React, { useState } from 'react';

import '../../css/TextStyles.css';
import './Eiffel.css';

import { AbsoluteCenter } from '../../components/Positioning/AbsoluteCenter';

const Eiffel = () => {
  const [text, setText] = useState('');
  const [isClicked, setIsClicked] = useState(false);

  function onClickHandler() {
    var img = document.getElementById('eiffel');
    img.style.transform = 'rotate(90deg)';
    setText('Down');
    setIsClicked(true);
  }

  return (
    <AbsoluteCenter>
      <h5 className='color-mod'>
        Eiffel {text}
        {isClicked}
      </h5>
      <hr />
      <img
        src={require('../../images/eiffel-tower-png.png')}
        style={{ height: '250px' }}
        alt='Eiffel Tower'
        id='eiffel'
      />
      <hr />
      <button className='btn-info' onClick={onClickHandler}>
        Click Me!
      </button>
    </AbsoluteCenter>
  );
};
export default Eiffel;

// I want the button to rotate the image 90 degrees to the right and add 'DOWN' to the h5 tag.
// I want isClicked to house a boolean that changes the text "Click Me" to "Reset" and that button resets the image to an upright position.
