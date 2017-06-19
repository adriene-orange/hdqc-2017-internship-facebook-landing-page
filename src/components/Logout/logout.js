import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as fetchUsername from '../../actions/fetchUsername';
import './logout.css';

class Logout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.props.dispatch(fetchUsername.userLogin(''));
  }
  render() {
    return (
      <div className="buttonContainer">
        <p className="username">Hello {this.props.username}</p>
        <button className="logout" onClick={this.handleClick}>Log Out</button>
      </div>
    );
  }
}

Logout.propTypes = {
  username: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect()(Logout);
