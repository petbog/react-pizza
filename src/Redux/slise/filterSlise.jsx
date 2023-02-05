import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    categoryId: 0,
    ratingId:0,
    sort: {
        name: 'по пулярности',
        typePizza: 'rating'
    }
}

export const filterSlise = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setCategoryId(state, action) {
            state.categoryId = action.payload
        },
        setRatingId(state,action){
            state.sort=action.payload
        }
    }
})

export const { setCategoryId,setRatingId } =filterSlise.actions;
export default filterSlise.reducer