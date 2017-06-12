import { combineReducers } from 'redux';
// import login from './login';
import selectedInterest from './selectedInterest';
import handleSignup from './handleSignup';

const rootReducer = combineReducers({
  selectedInterest,
  handleSignup,
});

export default rootReducer;
