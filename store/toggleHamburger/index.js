import { createSlice } from '@reduxjs/toolkit'

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
