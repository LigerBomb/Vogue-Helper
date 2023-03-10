import React from 'react';
import Logo from '../assets/sunglasses.png';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

function navbar() {
  return (
    <div className='navbar'>
      <div className='leftSide'></div>
        <img src={Logo} />
      <div className='rightSide'></div>
        <Link to="/"> Home </Link>
        <Link to="/"> Login </Link>
        <Link to="/"> About </Link>
        <Link to="/"> Contact </Link>
    </div>
  )
}

export default navbar
