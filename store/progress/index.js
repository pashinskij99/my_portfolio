import { createSlice } from "@reduxjs/toolkit"


const initialState = {
  isAnimatingProgress: false,
}

export const progressSlice = createSlice({
  name: 'progress',
  initialState,
  reducers: {
    setIsAnimating (state, action) {
      state.isAnimatingProgress = action.payload
    }
  }
})

export const { setIsAnimating } = progressSlice.actions

export default progressSlice.reducer