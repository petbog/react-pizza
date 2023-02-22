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
            const findItems = state.items.find(obj => obj.id === action.payload.id)
            if (findItems) {
                findItems.count++
            } else {
                state.items.push({
                    ...action.payload,
                    count: 1
                })
            }
            state.totalPrise = state.items.reduce((sum, obj) => {
                return (obj.price * obj.count) + sum
            }, 0)
        },
        minusItems(state, action) {
            const findItems = state.items.find(obj => obj.id === action.payload)
            if (findItems) {
                findItems.count--
            }
        },
        removeItem(state, action) {
            state.items = state.items.filter(obj => obj.id !== action.payload)
        },
        clearItem(state, action) {
            state.items = []
            state.totalPrise = 0
        }
    }
})

export const selectorCartData = state => state.cart

export const { addItem, removeItem, clearItem, minusItems } = CartSlice.actions;
export default CartSlice.reducer

