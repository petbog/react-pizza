import { configureStore } from "@reduxjs/toolkit";
import filter from './slise/filterSlise';
import cart from './slise/CartSlice';
import pizza from './slise/PizzaSlice';

export const store = configureStore({
    reducer:{
        filter:filter,
        cart:cart,
        pizza:pizza
        
    }
})