import React, { useState } from 'react';

import '../../css/TextStyles.css';

import { AbsoluteCenter } from '../../components/Positioning/AbsoluteCenter';

const Eiffel = () => {
  const [text, setText] = useState('');
  const [isClicked, setIsClicked] = useState(false);

  function onClickHandler() {}

  return (
    <AbsoluteCenter>
      <h5 className='color-mod'>Eiffel</h5>
      <hr />
      <img
        src={require('../../images/eiffel-tower-png.png')}
        style={{ height: '250px' }}
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
