import {combineReducers} from '@reduxjs/toolkit';
import { LoginSlice } from './reducers/Login/LoginSlice';

const rootReducer = combineReducers({
  login: LoginSlice.reducer,
});

export default rootReducer;
