import React from 'react';
import Link from 'next/link';
import { ConnectButton } from '@rainbow-me/rainbowkit';


const Navbar = () => {


  return (
    <nav className='navbar navbar-expand-lg navbar-expand-md navbar-light'>
      <div className='container-fluid'>
        <a className='navbar-brand' href='/'>
          Lens Social Media
        </a>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
            <Link href='/'>
              <li className='nav-item'>Home</li>
            </Link>
            <Link href='/profile'>
              <li className='ms-4 nav-item'>Your Profile</li>
            </Link>
          </ul>
          <ConnectButton></ConnectButton>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
