import React, { PropTypes } from 'react';
import './header.css';
import Login from './login';
import Logout from './logout';

const Header = (props) => {
  const { username, fetchUsername } = props;
  return (
    <div className="header">
      <div className="loginForm">
        <div className="logo" >
          <a href="https://www.facebook.com/" >
            <u>facebook</u>
          </a>
        </div>
        {
          (!username)
          ? <Login fetchUsername={fetchUsername} />
          : <Logout fetchUsername={fetchUsername} username={username} />
        }
      </div>
    </div>
  );
};

Header.propTypes = {
  fetchUsername: PropTypes.func.isRequired,
  username: PropTypes.bool.isRequired,
};

Header.defaultProps = {
  username: false,
};

export default Header;
