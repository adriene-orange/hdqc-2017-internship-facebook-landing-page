import { combineReducers } from 'redux';
// import login from './login';
import selectedInterest from './selectedInterest';
import fetchedUsername from './fetchUsername';
import handleSignup from './handleSignup';

const rootReducer = combineReducers({
  selectedInterest,
  fetchedUsername,
  handleSignup,
});

export default rootReducer;
