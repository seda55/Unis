// src/redux/features/productSlice.js
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

// API'dən məhsulları çəkmək
export const getProducts = createAsyncThunk("products", async () => {
  const { data } = await axios("https://dummyjson.com/products");
  return data.products;
});

export const productSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
    wishlist: [],
    basket: [],  // Basket üçün yeni bir property əlavə etdik
  },
  reducers: {
    // Sevimlilərə məhsul əlavə etmək
    addToWishlist: (state, action) => {
      const item = action.payload;
      const existingItem = state.wishlist.find((product) => product.id === item.id);
      if (!existingItem) {
        state.wishlist.push(item);
      }
    },
    // Sevimlilərdən məhsul silmək
    removeFromWishlist: (state, action) => {
      state.wishlist = state.wishlist.filter((product) => product.id !== action.payload);
    },
    // Sevimliləri təmizləmək
    clearWishlist: (state) => {
      state.wishlist = [];
    },
    // Səbətə məhsul əlavə etmək
    addToBasket: (state, action) => {
      const item = action.payload;
      const existingItem = state.basket.find((product) => product.id === item.id);
      if (existingItem) {
        existingItem.quantity += 1; // Əgər məhsul varsa, miqdarı artırırıq
      } else {
        state.basket.push({ ...item, quantity: 1 }); // Yoxdursa, əlavə edirik
      }
    },
    // Səbətdən məhsul silmək
    removeFromBasket: (state, action) => {
      state.basket = state.basket.filter((product) => product.id !== action.payload);
    },
    // Səbəti təmizləmək
    clearBasket: (state) => {
      state.basket = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.products = action.payload; // API-dən gələn məhsullar
    });
  },
});

export const { 
  addToWishlist, 
  removeFromWishlist, 
  clearWishlist, 
  addToBasket, 
  removeFromBasket, 
  clearBasket 
} = productSlice.actions;

export default productSlice.reducer;
