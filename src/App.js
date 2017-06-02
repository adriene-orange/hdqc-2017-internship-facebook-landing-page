import React from 'react';
import './App.css';
import Header from './components/header';
import ContentLeft from './components/contentLeft';
import ContentRight from './components/contentRight';
import Footer from './components/footer';

const App = () => (
  <div className="App">
    <Header />
    <div className="content">
      <ContentLeft />
      <ContentRight />
    </div>
    <Footer />
  </div>
);

export default App;
