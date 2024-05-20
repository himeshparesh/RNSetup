import {configureStore} from '@reduxjs/toolkit';
import rootReducer from './combineReducer';

export const store = configureStore({
  middleware: getdefaultMiddleware =>
    getdefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
  reducer: rootReducer,
});
export type RootState = ReturnType<typeof store.getState>;
