import { combineReducers } from 'redux';
import todos from './todo';
​
const rootReducer= combineReducers({todo:todos});

export default rootReducer;