import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../features/counterSlice";
import productsReducer from "../features/productsSlice"; 

export const store = configureStore({
  reducer: { counter: counterSlice ,
    products: productsReducer,},
  
});
