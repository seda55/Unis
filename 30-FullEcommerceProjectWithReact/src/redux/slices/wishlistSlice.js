import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [], // Array to store favorite products
};

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    toggleFavorite: (state, action) => {
      const product = action.payload;
      const existingIndex = state.items.findIndex((item) => item.id === product.id);
      
      if (existingIndex >= 0) {
        // Remove from wishlist if already added
        state.items.splice(existingIndex, 1);
      } else {
        // Add to wishlist if not already added
        state.items.push(product);
      }
    },
  },
});

export const { toggleFavorite } = wishlistSlice.actions;
export default wishlistSlice.reducer;
