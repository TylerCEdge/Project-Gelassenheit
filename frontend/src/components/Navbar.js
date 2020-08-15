import React from 'react';

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
      <button className='navbar-brand btn' href='/'>
        <h4>Project Gelassenheit</h4>
      </button>
      <button
        className='navbar-toggler btn'
        type='button'
        data-toggle='collapse'
        data-target='#navbarNav'
        aria-controls='#navbarNav'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <span className='navbar-toggler-icon'></span>
      </button>
      <div
        className='collapse navbar-collapse justify-content-end'
        id='navbarNav'
      >
        <ul className='navbar-nav'>
          <li className='nav-item active'>
            <a className='nav-link' href='/'>
              Home <span className='sr-only'>(current)</span>
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='/learn'>
              Learn
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='/journal'>
              Journal
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='/about'>
              About
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
