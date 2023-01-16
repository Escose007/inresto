import { createSlice } from '@reduxjs/toolkit';

export const restoMenu = createSlice({
  name: 'counter',
  initialState: {
    menu: {
      breakfast: [{"price":10,"dishDetails":"Dummy Dish","dishName":"Dummy Bhindi"}, {"price":20,"dishDetails":"Dummy Dish","dishName":"Dummy Tamatar"},{"price":140,"dishDetails":"Dummy Dish","dishName":"Dummy Aaloo"}],
      lunch: [{"price":10,"dishDetails":"Dummy Dish","dishName":"Dummy Aaloo"}],
      dinner: [{"price":10,"dishDetails":"Dummy Dish","dishName":"Dummy Tamatar"}],
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
