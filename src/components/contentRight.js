import React from 'react';
import './contentRight.css';
import Login from './login';

import Signup from './signup';

const ContentRight = () => (
  <div className="RightContent">
    <div className="mobile-login">
      <div className="login-title">
        <p>Existing user? Log in below</p>
      </div>
      <Login classStyle="mobile-loginElements" />
    </div>
    <div className="RightHeader">
      <h1 className="sign-up">Sign Up</h1>
      <p className="titleSubtext">It&apos;s free and always will be.</p>
    </div>
    <Signup />
  </div>
);

export default ContentRight;
