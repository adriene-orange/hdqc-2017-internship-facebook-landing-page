import { combineReducers } from 'redux';
// import login from './login';
import selectedInterest from './selectedInterest';
import fetchedUsername from './fetchUsername';

const rootReducer = combineReducers({
  selectedInterest,
  fetchedUsername,
});

export default rootReducer;
