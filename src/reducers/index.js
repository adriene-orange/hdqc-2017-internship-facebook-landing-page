import { combineReducers } from 'redux';
// import login from './login';
import selectedInterest from './selectedInterest';
import fetchedUsername from './fetchUsername';
import handleSignup from './handleSignup';
import wikiCall from './wikiCall';

const rootReducer = combineReducers({
  selectedInterest,
  fetchedUsername,
  handleSignup,
  wikiCall,
});

export default rootReducer;
