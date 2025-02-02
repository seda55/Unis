import { configureStore } from '@reduxjs/toolkit'
import productReducer from '../features/ProductSlice'
import basketReducer from '../features/BasketSlice'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'



const persistBasketConfig = {
    key: 'basket',
    storage,
  }

const persistBasketReducer = persistReducer(persistBasketConfig, basketReducer)


const persistProductConfig = {
  key: 'products',
  storage,
};
const persistProductReducer = persistReducer(persistProductConfig, productReducer);


export const store = configureStore({
  reducer: {
    products: persistProductReducer,
    basket:persistBasketReducer
  },middleware:(getDefaultMiddleWare)=>getDefaultMiddleWare({serializableCheck:false})
})

export const persistor = persistStore(store)