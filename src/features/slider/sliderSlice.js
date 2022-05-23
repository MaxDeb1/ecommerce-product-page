import { createSlice } from '@reduxjs/toolkit'
import { SliderData } from './SliderData';
import { ThumbnailData } from '../thumbnail/ThumbnailData';

const length = SliderData.length;

export const sliderSlice = createSlice({
  name: 'slide',
  initialState: {
    current: 0
  }, reducers: {
    prevSlide: state => {
      if (state.current === 0) {
        state.current = length - 1
      }else {
        state.current = state.current - 1
      }
    },
    nextSlide: state => {
      if (state.current === length - 1) {
        state.current = 0
      } else {
        state.current = state.current + 1
      }
    },
    selectSlide: state => {
      state.current = ThumbnailData
    }
  }
})

export const { prevSlide, nextSlide } = sliderSlice.actions

export const currentSlide = (state) => state.slide.current


export default sliderSlice.reducer