import { configureStore } from '@reduxjs/toolkit'
import cartItem from './counterSlice'

export const store = configureStore({
  reducer: {
    cartItem: cartItem
  },
})