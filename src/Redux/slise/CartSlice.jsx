import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    totalPrise: 0,
    items: []
}

export const CartSlice = createSlice({
    name: 'Cart',
    initialState,
    reducers: {
        addItem(state, action) {
            state.items.push(action.payload)
            state.totalPrise = state.items.reduce((sum, obj) => {
                return obj.price + sum 
            },0)
        },
        removeItem(state, action) {
            state.items = state.items.filter(obj => obj.id !== action.payload)
        },
        clearItem(state, action) {
            state.items = []
        }
    }
})


export const { addItem, removeItem, clearItem } = CartSlice.actions;
export default CartSlice.reducer

