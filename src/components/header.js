import React from 'react';

const Header = () => (
  <div className="app-header">
    <div className="nav">
      <a className="nav-home">
        <img
          className="nav-logo"
          alt="React Logo"
          src="https://facebook.github.io/react/img/logo.svg"
          height="36px"
          width="36px"
        />
        React
      </a>
      <div className="nav-list-left">
        <ul>
          <li className="nav-list-item">
            Docs
          </li>
          <li className="nav-list-item">
            Tutorial
          </li>
          <li className="nav-list-item">
            Community
          </li>
          <li className="nav-list-item">
            Blog
          </li>
        </ul>
      </div>
      <div className="nav-list-right">
        <ul>
          <li className="nav-list-item">
            GitHub
          </li>
          <li className="nav-list-item">
            v15.5.4
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default Header;
