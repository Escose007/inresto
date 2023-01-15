import { configureStore } from '@reduxjs/toolkit';
import restoMenuReducer from './restoMenu';

export default configureStore({
  reducer: {
    restoMenu: restoMenuReducer,
  },
});
