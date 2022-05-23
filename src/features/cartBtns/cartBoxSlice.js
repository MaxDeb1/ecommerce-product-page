import { createSlice } from '@reduxjs/toolkit'

const cartBoxSlice = createSlice({
  name: 'cartBox',
  initialState: {
    value: false
  },
  reducers: {
    isCartOpen(state) {
      state.value = !state.value
    },
    closeCart(state) {
      state.value = false;
    }
  }
})

export const { isCartOpen, closeCart } = cartBoxSlice.actions

export const cartBoxState = (state) => state.cartBox.value

export default cartBoxSlice.reducer