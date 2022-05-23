import { createSlice } from '@reduxjs/toolkit'
import { ThumbnailData } from './ThumbnailData';

const length = ThumbnailData.length;

export const thumbnailSlice = createSlice({
  name: 'thumbnail',
  initialState: {
    currentThumb: 0
  }, reducers: {
    prevSlide: state => {
      if (state.currentThumb === 0) {
        state.currentThumb = length - 1
      }else {
        state.currentThumb = state.currentThumb - 1
      }
    },
    nextSlide: state => {
      if (state.currentThumb === length - 1) {
        state.currentThumb = 0
      } else {
        state.currentThumb = state.currentThumb + 1
      }
    },
    selectSlide: (state, action) => {
      state.currentThumb = action.payload
    }
  }
})

export const { prevSlide, nextSlide, selectSlide } = thumbnailSlice.actions

export const currentThumb = (state) => state.thumbnail.currentThumb



export default thumbnailSlice.reducer