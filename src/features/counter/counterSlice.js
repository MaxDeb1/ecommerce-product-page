import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 1
  },
  reducers: {
    increment: state => {
      state.value += 1
    },
    decrement: state => {
      state.value > 1 && (state.value -= 1)
    },
    restoreDefault: state => {
      state.value = 1
    },

  }
})

export const { increment, decrement, restoreDefault } = counterSlice.actions

export const selectCount = (state) => state.counter.value
/* const count = selectCount(store.getState()) */

export default counterSlice.reducer