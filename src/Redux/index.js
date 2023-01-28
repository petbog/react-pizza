import { configureStore } from '@reduxjs/toolkit'
import { counterSlice } from './slise/sliseSearch';

export const store = configureStore({
  reducer: {
    counter:counterSlice,
    
  },
})