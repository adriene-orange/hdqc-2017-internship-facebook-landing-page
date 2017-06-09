import React, { PropTypes } from 'react';
import './header.css';
import Login from './login';
import Logout from './logout';

const Header = (props) => {
  const { username, setUsername } = props;
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
          ? <Login setUsername={setUsername} />
          : <Logout setUsername={setUsername} username={username} />
        }
      </div>
    </div>
  );
};

Header.propTypes = {
  setUsername: PropTypes.func.isRequired,
  username: PropTypes.bool.isRequired,
};

Header.defaultProps = {
  username: false,
};

export default Header;
