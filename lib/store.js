import { configureStore } from '@reduxjs/toolkit'
import historySlice from './features/history/historySlice'

export const makeStore = () => {
  return configureStore({
    reducer: historySlice
  })
}