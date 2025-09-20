import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <nav className="nav-container">
        <div className="logo">Vishal Yadav</div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;