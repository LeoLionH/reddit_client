import { configureStore } from '@reduxjs/toolkit';
import { listerSlice } from '../features/lister/listerSlice';
import { searchSlice } from '../features/search/searchSlice';

export const store = configureStore({
  reducer: {
    lister: listerSlice.reducer,
    search: searchSlice.reducer
  },
});
