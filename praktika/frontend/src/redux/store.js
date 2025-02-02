import { configureStore } from '@reduxjs/toolkit';
import productsReducer from '../feature/productsSlice'; // Yaratdığımız slice faylını import edirik

const store = configureStore({
  reducer: {
    products: productsReducer, // `productsSlice` reducerini əlavə edirik
  },
});

export default store;
