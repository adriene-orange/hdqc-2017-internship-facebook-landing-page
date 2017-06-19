import React from 'react';
import './contentRight.css';
import Login from './login';
import './toggle.css';
import Signup from './signup';

const ContentRight = () => (
  <div className="RightContent">
    <div className="mobile-login">
      <div className="login-title">
        <p className="titleSubtext">Existing user?</p>
        <input id="toggle-input" type="checkbox" value="selected" />
        <label className="toggle-label" htmlFor="toggle-input">Click to login</label>
        <div className="toggle-login">
          <Login classStyle="mobile-loginElements" />
        </div>
      </div>
    </div>
    <div className="RightHeader">
      <h1 className="sign-up">Sign Up</h1>
      <p className="titleSubtext">It&apos;s free and always will be.</p>
      <input type="checkbox" value="selected" id="toggle-input2" />
      <label className="signup-label" htmlFor="toggle-input2">
      Click to Sign up!
      </label>
      <div className="toggle-signup">
        <Signup />
      </div>
    </div>
  </div>
);

export default ContentRight;
