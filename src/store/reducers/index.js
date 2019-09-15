import { combineReducers } from 'redux';

import tasksReducer from './tasksReducer';
import inputReducer from './inputReduceR';

export default combineReducers({
  inputReducer,
  tasksReducer
});