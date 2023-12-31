import {configureStore, combineReducers} from '@reduxjs/toolkit';
import {persistStore, persistReducer} from 'redux-persist';
import storage from '@react-native-async-storage/async-storage';
import AuthReducer from './slices/authSlice';
import ProductReducer from './slices/productSlice';

const persistConfig = {
  key: 'root',
  storage,
  blacklist: [],
};
const rootReducer = combineReducers({
  auth: AuthReducer,
  product: ProductReducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
export default store;
