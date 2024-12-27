import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../features/auth/authSlice";
import productSlice from "../features/productSlice";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import basketSlice from '../features/basketSlice'; // Adjust the path as needed



const persistConfig = {
  key: 'root',
  storage,
};
const persistedReducer = persistReducer(persistConfig, basketSlice)


export const store = configureStore({
  reducer: {
    auth: authSlice,
    products: productSlice,
    basket: basketSlice,
  },
});
const persistor = persistStore(store);

export { persistor };
