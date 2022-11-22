import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  cursor: 'default',
}

export const cursorSlice = createSlice({
  name: 'cursor',
  initialState,
  reducers: {
    changeCursor(state, action) {
      state.cursor = action.payload
    }
  }
})

export const { changeCursor } = cursorSlice.actions
export default cursorSlice.reducer
