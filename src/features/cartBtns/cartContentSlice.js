import { createSlice } from '@reduxjs/toolkit';
const counter = document.getElementsByClassName('number');


const cartContentSlice = createSlice({
  name: 'isCartEmpty',
  initialState: {
    items: ""
  },
  reducers: {
    add: state => {
      if (state.items !== "" ) {
        state.items = parseInt(state.items) + parseInt(counter[0].innerText);
      } else {
        state.items = counter[0].innerText;
      }
    },
    remove: state => {
      state.items = ""
    }
  }
})

export const { add, remove } = cartContentSlice.actions

export const cartContent = (state) => state.isCartEmpty.items

export default cartContentSlice.reducer