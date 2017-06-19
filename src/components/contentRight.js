import React from 'react';
import './contentRight.css';
import Login from './login';
import './toggle.css';
import Signup from './signup';

const ContentRight = () => (
  <div className="RightContent">
    <div className="mobile-login">
      <div className="login-title">
        <input id="toggle-input" type="checkbox" value="selected" />
        <label className="toggle-label" htmlFor="toggle-input">Existing user? Log in below</label>
        <div className="toggle-login">
          <Login classStyle="mobile-loginElements" />
        </div>
      </div>
    </div>
    <div className="RightHeader">
      <h1 className="sign-up">Sign Up</h1>
      <p className="titleSubtext">It&apos;s free and always will be.</p>
    </div>
    <Signup />
  </div>
);

export default ContentRight;
