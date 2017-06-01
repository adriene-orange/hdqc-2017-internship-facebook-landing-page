import React from 'react';
import './App.css';

const App = () => (
  <div className="App">
    <div className="header">
      <div className="nav">
        <div className="nav-left">
          <div className="nav-logo">
            <img src="https://facebook.github.io/react/img/logo.svg" />
            React
          </div>
          <div className="nav-list">
            <ul className="nav-list-items">
              <li className="nav-list-item">Docs</li>
              <li className="nav-list-item">Tutorial</li>
              <li className="nav-list-item">Community</li>
              <li className="nav-list-item">Blog</li>
            </ul>
          </div>
          <div className="nav-form">
            <input id="search" className="nav-search" />
          </div>
        </div>
        <div className="nav-right">
          Right Nav
        </div>
      </div>
    </div>
    <div className="hero">
      Hero
    </div>
    <div className="content">
      <p>Yo! this is my awesome content</p>
      <p>Yo! this is my awesome content</p>
      <p>Yo! this is my awesome content</p>
      <p>Yo! this is my awesome content</p>
      <p>Yo! this is my awesome content</p>
      <p>Yo! this is my awesome content</p>
      <p>Yo! this is my awesome content</p>
      <p>Yo! this is my awesome content</p>
    </div>
    <div className="footer">
      Footer
    </div>
  </div>
);

export default App;
