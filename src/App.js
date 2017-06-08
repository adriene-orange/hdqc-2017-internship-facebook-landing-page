import React, { Component } from 'react';
import './App.css';
import Landing from './components/landing';
import Home from './components/home';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authenticated: false,
    };
    this.appLogin = this.appLogin.bind(this);
  }

  appLogin(authenticated) {
    this.setState({
      authenticated,
    });
  }

  render() {
    if (this.state.authenticated) {
      return (<Home auth={this.state.authenticated} appLogin={this.appLogin} />);
    }
    return (
      <Landing appLogin={this.appLogin} auth={this.state.authenticated} />
    );
  }
}

export default App;
