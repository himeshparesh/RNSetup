import {combineReducers} from '@reduxjs/toolkit';
import {DashboardSlice} from './reducers/DashboardSlice';
import {LoginSlice} from './reducers/LoginSlice';

const rootReducer = combineReducers({
  login: LoginSlice.reducer,
  dashboard: DashboardSlice.reducer,
});

export default rootReducer;
