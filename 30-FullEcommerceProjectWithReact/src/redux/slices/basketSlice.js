import { createSlice } from '@reduxjs/toolkit';

const basketSlice = createSlice({
  name: 'basket',
  initialState: {
    items: [],
  },
  reducers: {
    addToBasket: (state, action) => {
      state.items.push(action.payload);
    },
  },
});

export const { addToBasket } = basketSlice.actions;
export default basketSlice.reducer;
