import React from 'react';
import './Logo.css';

const logoImg = '/images/logo.png';

const Logo = ({ darkMode }) => {
  return (
    <div className="logo">
      <div className="logo-icon">
        <img src={logoImg} alt="Bitlyt Tech Solutions" className="logo-img" />
      </div>
      <div className="logo-text">
        <span className="logo-title">Bitlyt</span>
        <span className="logo-subtitle">TECH SOLUTIONS</span>
      </div>
    </div>
  );
};

export default Logo;
