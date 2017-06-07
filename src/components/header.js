import React, { PropTypes } from 'react';
import './header.css';
import Login from './login';

const Header = props => (
  <div className="header">
    <div className="loginForm">
      <div className="logo" >
        <a href="https://www.facebook.com/" >
          <u>facebook</u>
        </a>
      </div>
      <Login appLogin={props.appLogin} />
    </div>
  </div>
);

Header.propTypes = {
  appLogin: PropTypes.func.isRequired,
};

export default Header;
