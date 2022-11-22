import { createSlice } from '@reduxjs/toolkit'
import {cursorSlice} from "../cursor";

const initialState = {
  isHamburger: false,
}

export const toggleHamburgerSlice = createSlice({
  name: 'hamburger',
  initialState,
  reducers: {
    toggleHamburger(state){
      state.isHamburger = !state.isHamburger
    }
  }
})

export const { toggleHamburger } = toggleHamburgerSlice.actions
export default toggleHamburgerSlice.reducer
