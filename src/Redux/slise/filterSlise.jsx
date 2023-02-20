import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    categoryId: 0,
    curentPage: 1,
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
        setRatingId(state, action) {
            state.sort = action.payload
        },
        setCurentPage(state, action) {
            state.curentPage = action.payload
        },
        setFilters(state, action) {
            state.categoryId = Number(action.payload.categoryId)
            state.curentPage = Number(action.payload.curentPage)
            state.sort = action.payload.sort
        }
    }
})

export const { setCategoryId, setRatingId, setCurentPage, setFilters } = filterSlise.actions;
export default filterSlise.reducer