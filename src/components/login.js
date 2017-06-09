import React, { Component, PropTypes } from 'react';
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
      errorStyle: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.loginResult = this.loginResult.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  }

  loginResult(resultMessage, errorStyling) {
    this.setState({
      message: resultMessage,
      errorStyle: errorStyling,
    });
  }

  handleClick(event) {
    event.preventDefault();
    getUserByUsernameAndPassword(this.state.username, this.state.password)
    .then(() => {
      this.loginResult('', '');
      this.props.fetchUsername(this.state.username);
    }, (error) => {
      this.loginResult(error, 'error-style');
    });
  }

  render() {
    return (
      <div className="loginElements">
        <div className="loginItems">
          <form className="form-text" onSubmit={this.handleClick} >
            <div className="input-form">
              <span>Email or Phone</span> <br />
              <input
                type="text"
                name="username"
                onChange={this.handleChange}
              />
            </div>
            <div className="input-form">
              <span>Password</span> <br />
              <input
                type="text"
                name="password"
                onChange={this.handleChange}
              />
            </div>
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
          <LoginMessage
            message={this.state.message}
            errorStyle={this.state.errorStyle}
          />
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  fetchUsername: PropTypes.func.isRequired,
};

export default Login;
