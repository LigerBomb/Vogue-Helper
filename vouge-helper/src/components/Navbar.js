import React, { useState } from 'react';
import Logo from '../assets/sunglasses.png';
import { Link } from 'react-router-dom';
import ReorderIcon from '@mui/icons-material/Reorder';
import '../styles/Navbar.css';

function navbar() {

    const [openLinks, setOpenLinks] = useState(false)

    const toggleNavbar = () => {
        setOpenLinks(!openLinks)
    }

  return (
    <div className='navbar'>
      <div className='leftSide' id={openLinks ? "open" : "close"}>
      <img src={Logo} />
        <div className='hiddenLinks'>
            <Link to="/"> Home </Link>
            <Link to="/"> Login </Link>
            <Link to="/"> About </Link>
            <Link to="/"> Contact </Link>
        </div>
      </div>
      <div className='rightSide'></div>
        <Link to="/"> Home </Link>
        <Link to="/"> Login </Link>
        <Link to="/"> About </Link>
        <Link to="/"> Contact </Link>
        <button onClick={toggleNavbar}>
            <ReorderIcon />
        </button>

    </div>
  )
}

export default navbar
