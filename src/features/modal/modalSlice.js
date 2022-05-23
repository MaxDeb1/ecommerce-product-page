import { createSlice } from '@reduxjs/toolkit'

const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    value: false
  },
  reducers: {
    isModalOpen(state) {
      state.value = true
    },
    isModalClose(state) {
      state.value = false
    },

  }
})

export const { isModalOpen, isModalClose } = modalSlice.actions

export const ctaState = (state) => state.modal.value

export default modalSlice.reducer