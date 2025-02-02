import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { thunk } from "redux-thunk";

export const fetchProducts = createAsyncThunk('products/fetchProducts',async(_,thunkAPI)=>{
    try{
        const response = await axios.get('http://localhost:5000/api/products');
        return response.data.products;
    }catch(error){
        return thunkAPI.rejectWithValue('xeta')
    }
});

const productsSlice = createSlice({
    name:'products',
    initialState:{
        products:[],
        loading:false,
        error:'',
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(fetchProducts.pending,(state)=>{
            state.loading = true;
            state.error ='';
        })
        .addCase(fetchProducts.fulfilled, (state, action) => {
            state.loading = false;
            state.products = action.payload;
          })
          .addCase(fetchProducts.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
          });
    },
})

export default productsSlice.reducer;
