// Libs
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

// Components
import './home.css';
import List from './list';
import DetailWrapper from './detailWrapper';
import Header from './header';
import Footer from './footer';
import * as userData from '../data/store';

const Home = props => (

  <div>
    <Header username={props.username} />
    <div className="home">
      <List userData={userData} />
      <DetailWrapper value={props.subject} userData={userData} />
    </div>
    <Footer />
  </div>
);

Home.propTypes = {
  username: PropTypes.string,
  subject: PropTypes.string,
};

Home.defaultProps = {
  username: '',
  subject: '',
};

function mapStateToProps(state) {
  return {
    subject: state.selectedInterest.subject,
  };
}

export default connect(mapStateToProps)(Home);
