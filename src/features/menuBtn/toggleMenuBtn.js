import { createSlice } from '@reduxjs/toolkit'

const initialState = { value: false }

const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    isMenuOpen(state) {
      state.value = !state.value
    }
  },
})

export const { isMenuOpen } = menuSlice.actions
export default menuSlice.reducer