import React, { PropTypes } from 'react';
import './header.css';
import Login from './login';
import Logout from './logout';

const Header = (props) => {
  const { username } = props;
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
          ? <Login classStyle="loginElements" />
          : <Logout username={username} />
        }
      </div>
    </div>
  );
};

Header.propTypes = {
  username: PropTypes.string.isRequired,
};

Header.defaultProps = {
  username: '',
};

export default Header;
