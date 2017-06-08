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
    console.log(this.props.appLogin);
    this.props.appLogin(false);
  }
  render() {
    return (
      <button className="logout" onClick={this.handleClick}>Log Out</button>
    );
  }
}

Logout.propTypes = {
  appLogin: PropTypes.func.isRequired,
};

export default Logout;
