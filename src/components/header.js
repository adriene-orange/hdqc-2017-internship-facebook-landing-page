import React from 'react';
import './header.css';

const Header = () => (
  <div className="header">

    <div className="logo">
      <img align="left" alt="Facebook Logo" height="100" width="100" src="https://www.seeklogo.net/wp-content/uploads/2011/08/facebook-logo-vector-400x400.png" />
    </div>

    <form className="form-text">

      Email or Phone <br />
      <input type="text" name="" />

    </form>
    <form className="form-text">

      Password <br />
      <input type="text" name="" />

      <br />
      <a href="https://www.facebook.com/recover/initiate?lwv=110">
          Forgot account?
      </a>

    </form>

    <div className="button-container">
      <input className="button" type="button" value="Log In" />
    </div>


  </div>
);

export default Header;
