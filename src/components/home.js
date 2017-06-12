import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import './home.css';
import List from './list';
import DetailWrapper from './detailWrapper';
import Header from './header';
import Footer from './footer';
import * as userData from '../data/store';

const Home = props => (
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     value: '',
  //   };
  //   this.props.subscribe(() => {
  //     this.setState({
  //       value: this.props.getState().subject,
  //     });
  //   });
  // }

  <div>
    <Header username={props.username} fetchUsername={props.fetchUsername} />
    <div className="home">
      <List userData={userData} />
      <DetailWrapper value={props.subject} userData={userData} />
    </div>
    <Footer />
  </div>
);

Home.propTypes = {
  username: PropTypes.string.isRequired,
  subject: PropTypes.string.isRequired,
  fetchUsername: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  console.log('listItems--', state.selectedInterest.subject);
  return {
    subject: state.selectedInterest.subject,
  };
}

export default connect(mapStateToProps)(Home);
