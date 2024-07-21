import AsyncStorage from '@react-native-async-storage/async-storage';
import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {persistReducer, persistStore} from 'redux-persist';
import userGoldReducer from './userGoldDetails/reducer';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  //   whitelist: ['key1', 'key2'], //Things you want to persist
  // blacklist: ['useGold'], //Things you don't want to persist
};

const rootReducer = combineReducers({
  userGold: userGoldReducer as never,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }),
});

export const persistor = persistStore(store);
export default store;
export type RootState = ReturnType<typeof rootReducer>;
