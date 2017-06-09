import React, { Component, PropTypes } from 'react';
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
    this.props.fetchUsername(false);
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
  fetchUsername: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
};

export default Logout;
