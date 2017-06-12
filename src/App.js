import React, { Component } from 'react';
import './App.css';
import Landing from './components/landing';
import Home from './components/home';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'hdqc',
    };
    this.fetchUsername = this.fetchUsername.bind(this);
  }

  fetchUsername(username) {
    this.setState({
      username,
    });
  }

  render() {
    if (this.state.username) {
      return (<Home username={this.state.username} fetchUsername={this.fetchUsername} />);
    }
    return (
      <Landing username={this.state.username} fetchUsername={this.fetchUsername} />
    );
  }
}

export default App;
