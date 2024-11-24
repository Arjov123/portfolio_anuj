import React from 'react';
import '../css/navbar.css';

function NavBar() {
  return (
    <nav>
    <div className="logo">
        <a href="#home">Jawad.com</a>
    </div>
    <div className="nav-links">
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">Services</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Testimonials</a></li>
      </ul>
    </div>
    <div className='message'>
        <button className='gradient-button'>LET'S TALK</button>
    </div>
    </nav>
  );
}

export default NavBar;