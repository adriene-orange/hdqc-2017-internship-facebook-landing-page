import { combineReducers } from 'redux';
// import login from './login';
import selectedInterest from './selectedInterest';
import handleSignup from './handleSignup';
import wikiCall from './wikiCall';

const rootReducer = combineReducers({
  selectedInterest,
  handleSignup,
  wikiCall,
});

export default rootReducer;
