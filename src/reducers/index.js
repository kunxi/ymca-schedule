import { combineReducers } from 'redux';
import place from './place';
import date from './date';

const rootReducer = combineReducers({
  place,
  date,
});

export default rootReducer;
