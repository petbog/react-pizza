import { configureStore } from "@reduxjs/toolkit";
import filter from './slise/filterSlise';
import cart from './slise/CartSlice';
import pizza from './slise/PizzaSlice';
import { useDispatch } from "react-redux";

export const store = configureStore({
    reducer:{
        filter:filter,
        cart:cart,
        pizza:pizza 
    }
})
//типизация селекторов
export type RootState = ReturnType<typeof store.getState>
// типизация диспатча
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch