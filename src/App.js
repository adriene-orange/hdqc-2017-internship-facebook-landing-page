import React from 'react';
import './App.css';
import Header from './components/header';
import ContentLeft from './components/contentLeft';
import RightContent from './components/contentRight';
import Footer from './components/footer';

const App = () => (
  <div className="App">
    <Header />
    <div className="content-container">
      <div className="content">
        <ContentLeft />
        <RightContent />
      </div>
    </div>
    <Footer />
  </div>
);

export default App;
