import React, { Component } from 'react';
import './App.css';
import Landing from './components/landing';
import Home from './components/home';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
    };
    this.setUsername = this.setUsername.bind(this);
  }

  setUsername(username) {
    this.setState({
      username,
    });
  }

  render() {
    if (this.state.username) {
      return (<Home username={this.state.username} setUsername={this.setUsername} />);
    }
    return (
      <Landing username={this.state.username} setUsername={this.setUsername} />
    );
  }
}

export default App;
