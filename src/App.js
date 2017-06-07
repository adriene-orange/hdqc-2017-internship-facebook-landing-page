import React, { Component } from 'react';
import './App.css';
import Landing from './components/landing';

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
      return (<h1>Success!</h1>);
    }
    return (
      <Landing appLogin={this.appLogin} />
    );
  }
}

export default App;
