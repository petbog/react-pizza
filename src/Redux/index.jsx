import { configureStore } from "@reduxjs/toolkit";
import filter from './slise/filterSlise'

export const store = configureStore({
    reducer:{
        filter:filter,
        
    }
})