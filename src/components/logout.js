import React, { Component, PropTypes } from 'react';
import './logout.css';
import { getUserByName } from '../services/users';

class Logout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.props.fetchUsername(false);
  }
  render() {
    const userName = getUserByName(this.props.username);
    return (
      <div className="buttonContainer">
        <p className="username">Hello {userName.firstname} {userName.lastname}</p>
        <button className="logout" onClick={this.handleClick}>Log Out</button>
      </div>
    );
  }
}

Logout.propTypes = {
  fetchUsername: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
};

export default Logout;
