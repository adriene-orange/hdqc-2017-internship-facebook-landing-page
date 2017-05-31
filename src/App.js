import React from 'react';
import './App.css';

const App = () => (
  <div className="App">
    <div className="app-header">
      <div className="nav">
        <a className="nav-home">
          <img
            className="nav-logo"
            alt="React Logo"
            src="https://facebook.github.io/react/img/logo.svg"
            height="36px"
            width="36px"
          />
          React
        </a>
        <div className="nav-list-left">
          <ul>
            <li className="nav-list-item">
              Docs
            </li>
            <li className="nav-list-item">
              Tutorial
            </li>
            <li className="nav-list-item">
              Community
            </li>
            <li className="nav-list-item">
              Blog
            </li>
          </ul>
        </div>
        <div className="nav-list-right">
          <ul>
            <li className="nav-list-item">
              GitHub
            </li>
            <li className="nav-list-item">
              v15.5.4
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="app-hero">
      Hero
    </div>
    <div className="app-content">
      <p>Yo this is some awesome content.</p>
      <p>Yo this is some awesome content.</p>
      <p>Yo this is some awesome content.</p>
      <p>Yo this is some awesome content.</p>
      <p>Yo this is some awesome content.</p>
      <p>Yo this is some awesome content.</p>
      <p>Yo this is some awesome content.</p>
      <p>Yo this is some awesome content.</p>
      <p>Yo this is some awesome content.</p>
      <p>Yo this is some awesome content.</p>
      <p>Yo this is some awesome content.</p>
    </div>
    <div className="app-footer">
      Footer
    </div>
  </div>
);

export default App;
