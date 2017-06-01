import React from 'react';
import './App.css';
import Header from './components/header';
import Hero from './components/hero';
import Content from './components/content';
import Footer from './components/footer';

const App = () => (
  <div className="App">
    <Header />
    <Hero />
    <Content />
    <Footer />
  </div>
);

export default App;
