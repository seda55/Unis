import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

const baseURL =  "http://localhost:3000/api/products"

const initialState = {
    products:[]
}


export  const getProduct = createAsyncThunk(
    "products/getProduct",
    async()=>{
        const product = await axios(baseURL)
        return product.data;
    }
)

export const addProduct = createAsyncThunk(
    "products/addProduct",
    async(product)=>{
        const  newpRoduct = await axios(baseURL,product)
        return newpRoduct.dats ; 
    }
)

export const deleteProduct = createAsyncThunk(
    "products/deleteProduct",
    async(id)=>{
        await axios.delete(`${baseURL}/${id}`)
        return id;
    }
)



const productSlice = createSlice({
    name:"products",
    initialState,
    reducers:{
        searchProduct :(state,action)=>{
            state.products = state.products.filter((item)=> item.title.toLowerCase().includes(action.payload.toLowerCase()))
        },
        sortlowist:(state)=>{
state.products = state.products.sort((a,b)=> a.price -  b.price)
        },
        sortHeisht:(state)=>{
            state.products = state.products.sort((a,b)=> b.price -  a.price)
                    }
    },
    extraReducers:(builder)=>{
 builder
 .addCase(getProduct.fulfilled , (state,action)=>{
    state.products = action.payload
 })
 .addCase(addProduct.fulfilled ,(state , action)=>{
    state.products.push(action.payload)
 })
 .addCase(deleteProduct.fulfilled ,(state,action)=>{
    state.products = state.products.filter((product)=>product._id !== action.payload)
 })
    }
})


export const  {searchProduct , sortHeisht , sortlowist} = productSlice.actions

export default productSlice.reducer