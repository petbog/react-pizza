import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "..";
import { SortType } from "./filterSlise";

// можно сделать так бпринимает ключ и значение (название стринг,значение стринг)
// type FetchPizzasArgs =Record<string,string>

export type SearchPizzaParams = {
    category: string;
    sortBy: string;
    order: string;
    search: string;
    curentPage: string;
}
export const AxiosPizza = createAsyncThunk(
    'Pizza/AxiosPizza',
    async function (params: SearchPizzaParams) {
        const { category, sortBy, order, search, curentPage } = params

        const { data } = await axios.get<PizzaItems[]>(`https://63bf2a38e262345656e4a5dd.mockapi.io/items?page=${curentPage}&limit=3&sortBy=${sortBy}&order=${order}${search}${category}`)

        return data as PizzaItems[];
    }
)

type PizzaItems = {
    id: string;
    imageUrl: string;
    title: string;
    types: number[];
    sizes: number[];
    price: number;
    rating: number;
}
export enum Status {
    LOADING = 'loading',
    SUCCESS = 'succes',
    ERROR = 'error'
}

interface PizzaType {
    items: PizzaItems[];
    status: Status;
}


export const initialState: PizzaType = {
    items: [],
    status: Status.LOADING,
}

const PizzaSlise = createSlice({
    name: 'Pizza',
    initialState,
    reducers: {
        setItems(state, action: PayloadAction<PizzaItems[]>) {
            state.items = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(AxiosPizza.pending, (state, action) => {
            state.status = Status.LOADING
            state.items = []
        });
        builder.addCase(AxiosPizza.fulfilled, (state, action) => {
            state.status = Status.SUCCESS
            state.items = action.payload
        });
        builder.addCase(AxiosPizza.rejected, (state, action) => {
            state.status = Status.ERROR
            state.items = []
        });
    }
    // без typeScript
    // extraReducers: {
    //     [AxiosPizza.pending]: (state, action) => {
    //         state.status = 'loading'
    //         state.items = []
    //     },
    //     [AxiosPizza.fulfilled]: (state, action) => {
    //         state.status = 'success'
    //         state.items = action.payload

    //     },
    //     [AxiosPizza.rejected]: (state, action) => {
    //         state.status = 'error'
    //         state.items = []
    //     },
    // }
})

export const selectPizza = (state: RootState) => state.pizza


export const { setItems } = PizzaSlise.actions
export default PizzaSlise.reducer