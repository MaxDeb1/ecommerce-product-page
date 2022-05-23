import { configureStore } from '@reduxjs/toolkit'
import menuReducer from '../features/menuBtn/toggleMenuBtn'
import sliderReducer from '../features/slider/sliderSlice'
import thumbnailReducer from '../features/thumbnail/thumbnailSlice'
import modalReducer from '../features/modal/modalSlice'
import counterReducer from '../features/counter/counterSlice'
import cartBoxReducer from '../features/cartBtns/cartBoxSlice'
import cartContentReducer from '../features/cartBtns/cartContentSlice'

export default configureStore({
  reducer: {
    counter: counterReducer,
    isMenuOpen : menuReducer,
    isCartOpen: cartBoxReducer,
    isModalOpen: modalReducer,
    slide: sliderReducer,
    thumbnail: thumbnailReducer,
    isCartEmpty: cartContentReducer,
  }
})