import { combineReducers } from 'redux';
// import login from './login';
import selectedInterest from './selectedInterest';
import handleSignup from './handleSignup';
import callWiki from './callWiki';
import textCall from './textCall';

const rootReducer = combineReducers({
  selectedInterest,
  handleSignup,
  callWiki,
  textCall,
});

export default rootReducer;
