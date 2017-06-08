import React, { PropTypes } from 'react';
import './header.css';
import Login from './login';
import Logout from './logout';

const Header = (props) => {
  const auth = props.auth;
  return (
    <div className="header">
      <div className="loginForm">
        <div className="logo" >
          <a href="https://www.facebook.com/" >
            <u>facebook</u>
          </a>
        </div>
        {
          (!auth)
          ? <Login appLogin={props.appLogin} />
          : <Logout appLogin={props.appLogin} />
        }
      </div>
    </div>
  );
};

Header.propTypes = {
  appLogin: PropTypes.func.isRequired,
  auth: PropTypes.bool.isRequired,
};

Header.defaultProps = {
  auth: false,
};

export default Header;
