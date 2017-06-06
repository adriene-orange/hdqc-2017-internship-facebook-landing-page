import React from 'react';
import './header.css';
import Login from './login';

const Header = () => (
  <div className="header">
    <div className="loginForm">
      <div className="logo" >
        <a href="https://www.facebook.com/" >
          <u>facebook</u>
        </a>
      </div>
      <Login />
    </div>
  </div>
);

export default Header;
