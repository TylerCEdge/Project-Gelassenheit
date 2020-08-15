import React from 'react';

const Searchbar = (props) => {
  return (
    <React.Fragment>
      <div className='input-group mb-3'>
        <input
          type='text'
          className='form-control'
          placeholder="Recipient's username"
          aria-label="Recipient's username"
          aria-describedby='button-addon2'
        />
        <div className='input-group-append'>
          <button
            className='btn btn-outline-secondary'
            type='button'
            id='button-addon2'
          >
            Button
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Searchbar;
