import React from 'react';
import './header.css';
import Button from './button';

const Header = () => (
  <div className="header">
    <div className="loginForm">
      <div className="logo" >
        <a href="https://www.facebook.com/" >
          <u>facebook</u>
        </a>
      </div>
      <div className="loginElements">
        <div className="loginItems">
          <form className="form-text">

            <span>Email or Phone</span> <br />
            <input type="text" name="" />

          </form>
          <form className="form-text">

            <span>Password</span> <br />
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
