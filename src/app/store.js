import { configureStore } from '@reduxjs/toolkit';
import { listerSlice } from '../features/lister/listerSlice';

export const store = configureStore({
  reducer: {
    lister: listerSlice.reducer
  },
});
