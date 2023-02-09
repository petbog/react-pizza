import { configureStore } from "@reduxjs/toolkit";
import filter from './slise/filterSlise';
import cart from './slise/CartSlice';

export const store = configureStore({
    reducer:{
        filter:filter,
        cart:cart,
        
    }
})