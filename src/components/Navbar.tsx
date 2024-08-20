import React from 'react';
import {Link ,useNavigate}from "react-router-dom"
import './Navbar.css';

const Navbar = () => {
  return (
    
    <nav className="navbar">
      <div className="logo">Calm Connection</div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/basic info">BasicInfo</Link></li>
        <li><Link to="/faq">FAQ</Link></li>
        <li><Link to="/enquiry">Enquiry</Link></li>
        <li><Link to="/booking">Booking</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/register">Register</Link></li>
      </ul>
    </nav>
    
  );
};

export default Navbar;



