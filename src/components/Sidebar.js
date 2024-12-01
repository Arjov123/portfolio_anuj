import React from "react";
import "../css/sidebar.css";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <button className="close-btn" onClick={toggleSidebar}>
        SIDEBAR
      </button>
      <nav>
        <ul>
          <li><a href="#home" onClick={toggleSidebar}>Home</a></li>
          <li><a href="#services" onClick={toggleSidebar}>Services</a></li>
          <li><a href="#projects" onClick={toggleSidebar}>Projects</a></li>
          <li><a href="#contact" onClick={toggleSidebar}>Contact</a></li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;