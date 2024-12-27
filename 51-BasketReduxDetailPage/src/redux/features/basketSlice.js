// src/redux/features/basketSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  basket: [],
};

const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      state.basket.push(action.payload);
    },
    removeFromBasket: (state, action) => {
      state.basket = state.basket.filter((item) => item.id !== action.payload);
    },
    clearBasket: (state) => {
      state.basket = [];
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.basket.find((product) => product.id === id);
      if (item) {
        item.quantity = quantity;
      }
    },
  },
});

export const { addToBasket, removeFromBasket, clearBasket, updateQuantity } = basketSlice.actions;
export default basketSlice.reducer;
