// components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ title }) => {
  return (
    <nav className='navbar'>
      <h1>{title}</h1>
      <ul className="menu">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/notes">Notes</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
