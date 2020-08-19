import React, { useState, useEffect } from 'react';

import { AbsoluteCenter } from '../../components/Positioning/AbsoluteCenter';
import '../../css/TextStyles.css';

const Unipollar = () => {
  const [count, setCount] = useState(0);

  function onClickHandler() {
    setCount((count) => count + 1);
  }
  return (
    <AbsoluteCenter>
      <h2 className='color-mod text-center'>Is Tyler Awesome?</h2>
      <h4 className='color-mod'>{count}</h4>
      <div className='btn-group'>
        <button
          className='btn btn-primary'
          id='awesome'
          onClick={onClickHandler}
        >
          Yes
        </button>

        <button className='btn btn-danger' id='notAwesome'>
          No
        </button>
      </div>
    </AbsoluteCenter>
  );
};

export default Unipollar;
