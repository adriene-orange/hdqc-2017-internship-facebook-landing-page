import React, { PropTypes } from 'react';
import Header from './header';
import ContentLeft from './contentLeft';
import ContentRight from './contentRight';
import Footer from './footer';
import './landing.css';

const Landing = props => (
  <div className="landing">
    <Header username={props.username} styleSheet=".home-header" />
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
  username: PropTypes.string,
};

Landing.defaultProps = {
  username: '',
};


export default Landing;
