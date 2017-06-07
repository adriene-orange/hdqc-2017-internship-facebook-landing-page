import React, { PropTypes } from 'react';
import Header from './header';
import ContentLeft from './contentLeft';
import RightContent from './contentRight';
import Footer from './footer';

const Landing = props => (
  <div className="App">
    <Header appLogin={props.appLogin} />
    <div className="content-container">
      <div className="content">
        <ContentLeft />
        <RightContent />
      </div>
    </div>
    <Footer />
  </div>
);

Landing.propTypes = {
  appLogin: PropTypes.func.isRequired,
};

export default Landing;
