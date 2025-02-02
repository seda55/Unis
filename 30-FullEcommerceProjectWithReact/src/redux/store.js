import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authReducer from '../redux/slices/authSlice';
import wishlistReducer from './slices/wishlistSlice';


const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, authReducer);

const store = configureStore({
  reducer: {
    auth: persistedReducer,
    wishlist: wishlistReducer,
  },
});

export const persistor = persistStore(store);
export default store;
