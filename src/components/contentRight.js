import React, { Component, PropTypes } from 'react';
import './contentRight.css';
import { addUser } from '../services/users';

import Radio from './radioButton';

class RightContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      signedUp: false,
      error: '',
    };
    this.buttonHandler = this.buttonHandler.bind(this);
    this.usernameChange = this.usernameChange.bind(this);
    this.passwordChange = this.passwordChange.bind(this);
  }

  buttonHandler() {
    const { username, password } = this.state;
    addUser(username, password).then(
      (data) => {
        console.log(data);
        this.setState({ signedUp: data });
      },
      (error) => {
        console.log(error);
        this.setState({ error, signedUp: false });
      },
    );
  }

  usernameChange(e) {
    this.setState({
      username: e.target.value,
    });
  }

  passwordChange(e) {
    this.setState({
      password: e.target.value,
    });
  }

  render() {
    return (
      <div className="RightContent">
        <div className="RightHeader">
          <h1 className="sign-up">Sign Up</h1>
          <p className="titleSubtext">It&apos;s free and always will be.</p>
        </div>
        <div className="FL_Name">
          <input className="First_Form" type="text" name="First" placeholder="First name" />
          <input className="First_Form" type="text" name="Last" placeholder="Last name" />
        </div>
        <div className="Account_Form">
          <input
            className="Second_Form"
            type="username"
            name="Account"
            placeholder="Username"
            onChange={e => this.usernameChange(e)}
          />
          <input
            className="Second_Form"
            type="password"
            name="password"
            placeholder="New password"
            onChange={e => this.passwordChange(e)}
          />
        </div>

        <div className="RightSecond">
          <p>Birthday</p>
          <div>
            <select name="Month">
              <option value="Month">Month</option>
              <option value="Jan">Jan</option>
              <option value="Feb">Feb</option>
              <option value="Mar">Mar</option>
              <option value="Apr">Apr</option>
              <option value="May">May</option>
              <option value="Jun">Jun</option>
              <option value="Jul">Jul</option>
              <option value="Aug">Aug</option>
              <option value="Sep">Sep</option>
              <option value="Oct">Oct</option>
              <option value="Nov">Nov</option>
              <option value="Dec">Dec</option>
            </select>
            <select name="Day">
              <option value="Day">Day</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
            </select>
            <select name="Year">
              <option value="Year">Year</option>
              <option value="2017">2017</option>
              <option value="2016">2016</option>
              <option value="2015">2015</option>
              <option value="2014">2014</option>
              <option value="2013">2013</option>
              <option value="2012">2012</option>
              <option value="2011">2011</option>
              <option value="2010">2010</option>
              <option value="2009">2009</option>
              <option value="2008">2008</option>
              <option value="2007">2007</option>
              <option value="2006">2006</option>
            </select>
            <a href="">
              Why do I need to provide my birthday?
            </a>
          </div>
          <br />
          <Radio />
        </div>
        <div className="subtext">
          <p>
            By clicking Create Account, you agree to our
            <a href="">Terms</a> and that you have read our
            <a href=""> Data Policy</a>, including our
            <a href="">Cookie Use</a>. You
            may receive SMS Notifications from Facebook and can
            opt out at any time.
          </p>
        </div>
        <div className="CreateAccount-button">
          <input type="submit" value="Create Account" onClick={this.buttonHandler} />
        </div>
        <div className="CreateaPage">
          <p><a href="">Create a Page</a> for a celebrity, band or business.</p>
        </div>

        <div className="response-banner">
          {
            this.state.signedUp ?
              <SignInSuccess /> :
              <SignInFailure error={this.state.error} />
          }
        </div>
      </div>
    );
  }
}

const SignInSuccess = () => (
  <div>Created Account Successfully</div>
);

const SignInFailure = props => (
  <div>{props.error}</div>
);

SignInFailure.propTypes = {
  error: PropTypes.string.isRequired,
};

export default RightContent;
