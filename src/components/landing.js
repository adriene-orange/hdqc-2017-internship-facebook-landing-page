import React, { PropTypes } from 'react';
import Header from './header';
import ContentLeft from './contentLeft';
import ContentRight from './contentRight';
import Footer from './footer';

const Landing = props => (
  <div className="App">
    <Header fetchUsername={props.fetchUsername} styleSheet=".home-header" />
    <div className="content-container">
      <div className="content">
        <ContentLeft />
        <ContentRight />
      </div>
    </div>
    <Footer />
  </div>
);

Landing.propTypes = {
  fetchUsername: PropTypes.func.isRequired,
};

export default Landing;
