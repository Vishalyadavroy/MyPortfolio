import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer-container">
      <p>&copy; {new Date().getFullYear()} Vishal Yadav. All Rights Reserved.</p>
    </footer>
  );
}

export default Footer;