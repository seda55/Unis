import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Initial State
const initialState = {
  products: [],
  searchQuery: '',
  status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};

// Async Thunk to fetch products from API
export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
  const response = await fetch('https://api.example.com/products'); // Replace with actual API URL
  const data = await response.json();
  return data;
});

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    sortByName: (state, action) => {
      const direction = action.payload; // 'asc' or 'desc'
      state.products.sort((a, b) => {
        if (direction === 'asc') {
          return a.name.localeCompare(b.name);
        } else {
          return b.name.localeCompare(a.name);
        }
      });
    },
    sortByPrice: (state, action) => {
      const direction = action.payload; // 'low-high' or 'high-low'
      state.products.sort((a, b) => {
        if (direction === 'low-high') {
          return a.price - b.price;
        } else {
          return b.price - a.price;
        }
      });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { setSearchQuery, sortByName, sortByPrice } = productsSlice.actions;

export default productsSlice.reducer;
