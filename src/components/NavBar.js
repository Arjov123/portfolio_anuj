import React, { useState } from 'react';
import '../css/navbar.css';
import Sidebar from './Sidebar';

function NavBar() {

  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    console.log("Toggle Sidebar", isSidebarOpen);
    setSidebarOpen((prev) => !prev);
  };

  return (
    <>
    <nav>

    <button className="menu-btn" onClick={toggleSidebar}>
        ☰
      </button>
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
     

     {isSidebarOpen && <div className='message'>
        <button className='nav-button'>LET'S TALK</button>
      </div>}


    </nav>
    {isSidebarOpen && <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />}


    </>
    
  );
}

export default NavBar;