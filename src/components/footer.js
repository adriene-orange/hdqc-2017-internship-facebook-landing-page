import React from 'react';
import './footer.css';
import Button from './button';
import FooterMap from './FooterMap';

const Footer = () => {
  const colArray1 = ['Sign Up', 'Celebrities', 'Privacy'];
  const colArray2 = ['Log In', 'Marketplace', 'Cookies'];
  const colArray3 = ['Messenger', 'Groups', 'Ad Choices'];
  const colArray4 = ['Facebook', 'Recipes', 'Terms'];
  const colArray5 = ['Mobile', 'Moments', 'Help'];
  const colArray6 = ['Find Friends', 'Instagram'];
  const colArray7 = ['People', 'About'];
  const colArray8 = ['Places', 'Create Page'];
  const colArray9 = ['Locations', 'Careers'];
  return (
    <div className="footer-wrapper">
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
              <Button className="language-expander" value="+" />
            </li>
          </ul>
        </div>
        <div className="footer-site-map">
          <span values={colArray1} />
          <FooterMap values={colArray1} />
          <FooterMap values={colArray2} />
          <FooterMap values={colArray3} />
          <FooterMap values={colArray4} />
          <FooterMap values={colArray5} />
          <FooterMap values={colArray6} />
          <FooterMap values={colArray7} />
          <FooterMap values={colArray8} />
          <FooterMap values={colArray9} />

        </div>

        <p className="footer-trademark">Facebook © 2017</p>

      </footer>
    </div>);
};

export default Footer;
