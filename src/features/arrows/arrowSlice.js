import { createSlice } from '@reduxjs/toolkit'

export const arrowSlice = createSlice({
  name: 'selectedImage',
  initialState: {
    currentImageId: 1
  },
  reducers: {
    nextImageClicked: state => {
        (state.currentImageId+1) > 4 ? state.currentImageId = 1 : state.currentImageId +=1
    },
    prevImageClicked: state => {
        (state.currentImageId-1) < 1 ? state.currentImageId = 4 : state.currentImageId -=1
    }
  }
})

export const { increment, decrement } = arrowSlice.actions

export const selectCount = (state) => state.selectedImage.currentImageId
/* const count = selectCount(store.getState()) */

export default arrowSlice.reducer