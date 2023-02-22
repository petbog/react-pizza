import { createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";


export const AxiosPizza = createAsyncThunk(
    'Pizza/AxiosPizza',
    async function ({category, sortBy, order, search, curentPage}){
        const {data}= await axios.get(`https://63bf2a38e262345656e4a5dd.mockapi.io/items?page=${curentPage}&limit=3&sortBy=${sortBy}&order=${order}${search}${category}`)
        return data
    }
)

export const initialState = {
    items: [],
    status: '',
}

const PizzaSlise = createSlice({
    name: 'Pizza',
    initialState,
    reducers: {
        setItems(state, action) {
            state.items = action.payload
        }
    },
    extraReducers:{
        [AxiosPizza.pending]:(state,action)=>{
            state.status = 'loading'
            state.items=[]
        },
        [AxiosPizza.fulfilled]:(state,action)=>{
            state.status='success'
            state.items =action.payload

        },
        [AxiosPizza.rejected]:(state,action)=>{
            state.status='error'
            state.items=[]
        },
    }
})

export const { setItems } = PizzaSlise.actions
export default PizzaSlise.reducer