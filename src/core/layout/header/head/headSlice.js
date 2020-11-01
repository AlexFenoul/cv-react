import { createSlice } from '@reduxjs/toolkit';

export const headSlice = createSlice({
  name: 'head',
  initialState: {
    color: true,
  },
  reducers: {
    changeColor: state => {
      state.color = !state.color;
    },
  },
});

export const { changeColor } = headSlice.actions;

export const selectColor = state => state.color;

export default headSlice.reducer;
