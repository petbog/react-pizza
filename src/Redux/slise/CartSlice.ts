import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '..';
import { getCartFromlc } from './../../utils/getCartFromlc';
import { calcTotalPrise } from './../../utils/calcTotalPrise';


export type CardItem = {
    id: string;
    imageUrl: string;
    title: string;
    types: string;
    sizes: number;
    price: number;
    count: number;
}

interface CartType {
    totalPrise: number;
    items: CardItem[];
}

const {items,totalPrise}=getCartFromlc()
const initialState: CartType = {
    totalPrise,
    items
}

export const CartSlice = createSlice({
    name: 'Cart',
    initialState,
    reducers: {
        addItem(state, action:PayloadAction<CardItem>) {
            const findItems = state.items.find(obj => obj.id === action.payload.id)
            if (findItems) {
                findItems.count++
            } else {
                state.items.push({
                    ...action.payload,
                    count: 1
                })
            }
            state.totalPrise = calcTotalPrise(state.items)
        },
        minusItems(state, action:PayloadAction<string>) {
            const findItems = state.items.find(obj => obj.id === action.payload)
            if (findItems) {
                findItems.count--
            }
        },
        removeItem(state, action:PayloadAction<string>) {
            state.items = state.items.filter(obj => obj.id !== action.payload)
        },
        clearItem(state, action) {
            state.items = []
            state.totalPrise = 0
        }
    }
})

export const selectorCartData = (state: RootState) => state.cart

export const { addItem, removeItem, clearItem, minusItems } = CartSlice.actions;
export default CartSlice.reducer

