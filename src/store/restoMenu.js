import { createSlice } from '@reduxjs/toolkit';

export const restoMenu = createSlice({
  name: 'counter',
  initialState: {
    menu: {
      breakfast: [],
      lunch: [],
      dinner: [],
    },
  },
  reducers: {
    addMenuItem: (state, action) => {
      state.menu[action.payload.type] = [
        ...state.menu[action.payload.type],
        action.payload.value,
      ];
    },
  },
});

// Action creators are generated for each case reducer function
export const { addMenuItem } = restoMenu.actions;

export default restoMenu.reducer;
