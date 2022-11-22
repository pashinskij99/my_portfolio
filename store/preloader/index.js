import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firstLoad: true
}

export const preloaderSlice = createSlice({
  name: 'preloader',
  initialState,
  reducers: {
    firstLoadFinish(state, action) {
      state.firstLoad = action.payload
    }
  }
})

export const { firstLoadFinish } = preloaderSlice.actions
export default preloaderSlice.reducer