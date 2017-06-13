import { combineReducers } from 'redux';
// import login from './login';
import selectedInterest from './selectedInterest';
import handleSignup from './handleSignup';
import callWiki from './callWiki';

const rootReducer = combineReducers({
  selectedInterest,
  handleSignup,
  callWiki,
});

export default rootReducer;
