import React from 'react';
import './header.css';
import Button from './button';

const Header = () => (
  <div className="header">
    <div className="loginForm">
      <div className="logo">
        <img align="left" alt="Facebook Logo" height="100" width="100" src="https://www.seeklogo.net/wp-content/uploads/2011/08/facebook-logo-vector-400x400.png" />
      </div>
      <div className="loginElements">
        <div className="loginItems">
          <form className="form-text">

            Email or Phone <br />
            <input type="text" name="" />

          </form>
          <form className="form-text">

            Password <br />
            <input type="text" name="" />

          </form>
          <Button
            containerName="button-container"
            className="button"
            type="button"
            value="Log In"
          />
        </div>
        <a className="forgotAccount" href="https://www.facebook.com/recover/initiate?lwv=110">
            Forgot account?
        </a>

      </div>
    </div>
  </div>
);

export default Header;
