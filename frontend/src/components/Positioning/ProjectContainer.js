import React from 'react';

import '../../css/CustomContainer.css';

const ProjectContainer = (props) => {
  return (
    <div className='color-mod' id='custom-container'>
      <h5>{props.children}</h5>
      <hr />
      {props.children}
      <hr />
    </div>
  );
};

export default ProjectContainer;
