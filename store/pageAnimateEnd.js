import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pageAnimateEnd: false
}

const pageAnimateEndSlice = createSlice({
  name: 'pageAnimateEnd',
  initialState,
  reducers: {
    setPageAnimateEnd(state, action){
      state.pageAnimateEnd = action.payload
    }
  }
})

export const { setPageAnimateEnd } = pageAnimateEndSlice.actions
export default pageAnimateEndSlice.reducer