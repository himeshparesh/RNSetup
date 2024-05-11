import {combineReducers} from '@reduxjs/toolkit';
import {SR} from './reducers';

const rootReducer = combineReducers({
  login: SR.LoginReducer.LoginSlice.reducer,
});

export default rootReducer;
