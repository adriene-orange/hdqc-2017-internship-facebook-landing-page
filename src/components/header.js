import React from 'react';
import './header.css';

const Header = () => (
  <div className="header">
    <div className="nav">
      <div className="nav-left">
        <div className="nav-logo">
          <img alt="React Logo" className="nav-logo-image" height="36" width="36" src="https://facebook.github.io/react/img/logo.svg" />
          React
        </div>
        <div className="nav-list">
          <ul className="nav-list-items">
            <li className="nav-list-item">Docs</li>
            <li className="nav-list-item">Tutorial</li>
            <li className="nav-list-item">Community</li>
            <li className="nav-list-item">Blog</li>
          </ul>
        </div>
        <div className="nav-form">
          <input id="search" className="nav-search" />
        </div>
      </div>
      <div className="nav-right">
        Right Nav
      </div>
    </div>
  </div>
);

export default Header;
