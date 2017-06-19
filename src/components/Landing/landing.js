import React, { PropTypes } from 'react';
import Header from '../Header/header';
import ContentLeft from '../ContentLeft/contentLeft';
import ContentRight from '../ContentRight/contentRight';
import Footer from '../Footer/footer';
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
