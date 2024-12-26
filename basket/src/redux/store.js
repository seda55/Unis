import { configureStore } from '@reduxjs/toolkit'
import basketReducer from "./basketSlice";
import productsReducer from "./productSlice"


const store = configureStore({
  reducer: {
    basket : basketReducer,
    products :productsReducer,
  },
})

export default store