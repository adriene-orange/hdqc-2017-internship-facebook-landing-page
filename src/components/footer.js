import React from 'react';
import './footer.css';

const Footer = () => (
  <footer className="footer">
    <div className="footer-languages">
      <ul>
        <li>English (US)</li>
        <li>Español</li>
        <li>Français (France)</li>
        <li>中文(简体)</li>
        <li>العربية</li>
        <li>Português (Brasil)</li>
        <li>Italiano</li>
        <li>Deutsch</li>
        <li>한국어</li>
        <li>हिन्दी</li>
        <li>日本語</li>
        <li>
          <button className="language-expander">+</button>
        </li>
      </ul>
    </div>
    <div className="footer-site-map">
      <ul>
        <li>Sign Up</li>
        <li>Celebrities</li>
        <li>Privacy</li>
      </ul>
      <ul>
        <li>Log In</li>
        <li>Marketplace</li>
        <li>Cookies</li>
      </ul>
      <ul>
        <li>Messenger</li>
        <li>Groups</li>
        <li>Ad Choices
          <span className="add-arrow" />
        </li>
      </ul>
      <ul>
        <li>Facebook Lite</li>
        <li>Recipes</li>
        <li>Terms</li>
      </ul>
      <ul>
        <li>Mobile</li>
        <li>Moments</li>
        <li>Help</li>
      </ul>
      <ul>
        <li>Find Friends</li>
        <li>Instagram</li>
      </ul>
      <ul>
        <li>People</li>
        <li>About</li>
      </ul>
      <ul>
        <li>Places</li>
        <li>Create Page</li>
      </ul>
      <ul>
        <li>Locations</li>
        <li>Careers</li>
      </ul>
    </div>

    <p className="footer-trademark">Facebook © 2017</p>

  </footer>
);

export default Footer;
