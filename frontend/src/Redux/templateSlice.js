import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    selectedtemplate: 'minimalist', // Default selected template
   
  };
  

const templateSlice = createSlice({
  name: 'template',
  initialState,
  reducers: {
    settemplate: (state, action) => {
      state.selectedtemplate = action.payload;
    },
  },
});

export const { settemplate } = templateSlice.actions;
export default templateSlice.reducer;
