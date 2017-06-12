import { combineReducers } from 'redux';
// import login from './login';
import selectedInterest from './selectedInterest';

const rootReducer = combineReducers({
  selectedInterest,
});

export default rootReducer;
