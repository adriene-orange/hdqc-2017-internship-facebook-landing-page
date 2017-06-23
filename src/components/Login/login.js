import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Button from '../Button/button';
import LoginMessage from '../LoginMessage/loginMessage';
import { getUserByUsernameAndPassword } from '../../services/users';
import * as fetchUsername from '../../actions/fetchUsername';
import './login.css';

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
      this.props.dispatch(fetchUsername.userLogin(this.state.username));
    }, (error) => {
      this.loginResult(error, 'error-style');
    });
  }

  render() {
    return (
      <div className={this.props.classStyle}>
        <div className="loginItems">
          <form className="form-text" onSubmit={this.handleClick} >
            <div className="input-form">
              <span className="form-descriptor" >Email or Phone</span> <br />
              <input
                className="class-username"
                type="text"
                name="username"
                className="username-input"
                onChange={this.handleChange}
                placeholder="Email or Phone"
              />
            </div>
            <div className="input-form">
              <span className="form-descriptor" >Password</span> <br />
              <input
                className="password"
                type="text"
                name="password"
                className="passowrd-input"
                onChange={this.handleChange}
                placeholder="Password"
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
  dispatch: PropTypes.func.isRequired,
  classStyle: PropTypes.string.isRequired,
};

function mapStateToProps(state) {
  return {
    username: state.fetchedUsername.username,
  };
}

export default connect(mapStateToProps)(Login);
