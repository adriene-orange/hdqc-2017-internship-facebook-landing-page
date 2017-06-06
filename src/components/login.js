import React, { Component } from 'react';
import { getUserByUsernameAndPassword } from '../services/users';
import './header.css';
import Button from './button';
import LoginMessage from './loginMessage';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      message: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.loginResult = this.loginResult.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  loginResult(resultMessage) {
    console.log('Hey!');
    this.setState({
      message: resultMessage,
    });
  }

  handleClick(event) {
    event.preventDefault();
    console.log(`A login attempt was made ${this.state.username} ${this.state.password}`);
    getUserByUsernameAndPassword(this.state.username, this.state.password)
    .then(() => {
      console.log('Login successful');
      this.loginResult('Login successful');
    }, () => {
      console.log('Login Failed');
      this.loginResult('Login Failed');
    });
  }

  render() {
    return (
      <div className="loginElements">
        <div className="loginItems">
          <form className="form-text" onSubmit={this.handleClick} >

            <span>Email or Phone</span> <br />
            <input
              type="text"
              name="username"
              onChange={this.handleChange}
            />

            <span>Password</span> <br />
            <input
              type="text"
              name="password"
              onChange={this.handleChange}
            />

            <Button
              containerName="button-container"
              className="button"
              type="submit"
              value="Log In"
            />
          </form>
        </div>
        <a className="forgotAccount" href="https://www.facebook.com/recover/initiate?lwv=110">
            Forgot account?
        </a>
        <div className="login-message">
          <LoginMessage message={this.state.message} />
        </div>
      </div>
    );
  }
}

export default Login;
