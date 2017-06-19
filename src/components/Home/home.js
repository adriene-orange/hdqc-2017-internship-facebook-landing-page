// Libs
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

// Components
import List from '../List/list';
import DetailWrapper from '../DetailWrapper/detailWrapper';
import Header from '../Header/header';
import Footer from '../Footer/footer';
import * as userData from '../../data/store';
import './home.css';

const Home = props => (
  <div className="home-container">
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
