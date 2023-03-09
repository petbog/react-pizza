import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";

export enum  SortPropertyEnum{
    RATING_DESC = 'rating',
    RATING_ASC = '-rating',
    PRICE_DESC = 'price',
    PRICE_ASC = '-price',
    TITLE_DESC = 'title',
    TITLE_ASC = '-title',
}

export type SortType = {
    name: string;
    typePizza: SortPropertyEnum;
}

export interface FilterType {
    searchValue: string;
    categoryId: number;
    curentPage: number;
    sort: SortType

}

const initialState: FilterType = {
    searchValue: '',
    categoryId: 0,
    curentPage: 1,
    sort: {
        name: 'по пулярности',
        typePizza: SortPropertyEnum.PRICE_DESC  
    }
}

export const filterSlise = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setCategoryId(state, action:PayloadAction<number>) {
            state.categoryId = action.payload
        },
        setRatingId(state, action:PayloadAction<SortType>) {
            state.sort = action.payload
        },
        setCurentPage(state, action:PayloadAction<number>) {
            state.curentPage = action.payload
        },
        setFilters(state, action:PayloadAction<FilterType>) {
            state.categoryId = Number(action.payload.categoryId)
            state.curentPage = Number(action.payload.curentPage)
            state.sort = action.payload.sort
        },
        setSearchValue(state, action:PayloadAction<string>) {
            state.searchValue = action.payload
        }
    }
})

export const selectFilterData = (state: RootState) => state.filter
export const selectSort = (state: RootState) => state.filter.sort
export const selectTypePizza = (state: RootState) => state.filter.sort.typePizza

export const { setCategoryId, setRatingId, setCurentPage, setFilters, setSearchValue } = filterSlise.actions;
export default filterSlise.reducer