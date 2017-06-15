// Libs
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

// Components
import './App.css';
import Landing from './components/landing';
import Home from './components/home';

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

function mapStateToProps() {
  return {
    username: 'hdqc',
  };
}
// function mapStateToProps(state) {
//   return {
//     username: state.fetchedUsername.username,
//   };
// }

export default connect(mapStateToProps)(App);
