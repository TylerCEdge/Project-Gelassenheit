import React from 'react';

import './AbsoluteCenter.css';

export const AbsoluteCenter = (props) => {
  return (
    <div className='row justify-content-center align-items-center'>
      <div className='col'>{props.children}</div>
    </div>
  );
};
