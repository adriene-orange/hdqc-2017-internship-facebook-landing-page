import React from 'react';
import './contentRight.css';

const RightContent = () => (

  <div className="RightContent">
    <div className="RightHeader">
      <h1>Sign Up</h1>
      <h3>It&apos;s free and always will be.</h3>
    </div>
    <div className="FL_Name">
      <input className="First_Form" type="text" name="First" placeholder="First name" />
      <input className="First_Form" type="text" name="Last" placeholder="Last name" />
    </div>
    <div className="Account_Form">
      <input
        className="Second_Form"
        type="text"
        name="Account"
        placeholder="Mobile number or email"
      />
      <input className="Second_Form" type="text" name="password" placeholder="New password" />
    </div>

    <div className="RightSecond">
      Birthday
      <select name="Month">
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
      <input type="radio" name="female" value="female" />Female
      <input type="radio" name="male" value="male" />Male
    </div>
    <div className="subtext">
      <p>
      By clicking Create Account, you agree to our Terms and that you have read
      our Data Policy, including our Cookie Use. You may receive SMS Notifications
      from Facebook and can opt out at any time.
      </p>
    </div>
    <div className="CreateAccount-button">
      <input type="submit" value="Create Account" />
    </div>
    <div className="CreateaPage">
      <p>Create a Page for a celebrity, band or business.</p>
    </div>
  </div>


);

export default RightContent;
