// Libs
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

// Components
import './App.css';
import Landing from './components/Landing/landing';
import Home from './components/Home/home';

const App = (props) => {
  if (props.username) {
    return (<Home username={props.username} />);
  }
  return (<Landing username={props.username} />);
};

App.propTypes = {
  username: PropTypes.string,
};

App.defaultProps = {
  username: '',
};

function mapStateToProps(state) {
  return {
    username: state.fetchedUsername.username,
  };
}

export default connect(mapStateToProps)(App);
