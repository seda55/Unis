import { createSlice } from "@reduxjs/toolkit";


const basketSlice = createSlice({
    name: "basket",
    initialState: [],
    reducers:{
        addToBasket:(state ,action)=>{
            state.push(action.payload);
        },
        removeFromBasket:(state,action)=>{
            return state.filter((_,index)=> index !== action.payload);

        },
    }
})

export const {addToBasket,removeFromBasket} = basketSlice.actions;
export default basketSlice.reducer;