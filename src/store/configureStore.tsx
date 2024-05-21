import {configureStore} from '@reduxjs/toolkit';
import rootReducer from './combineReducer';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['login.loading'],
  whitelist: ['login'],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  middleware: getdefaultMiddleware =>
    getdefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
