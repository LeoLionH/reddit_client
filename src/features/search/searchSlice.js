import { createSlice } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';

const initialState = {
    keyword: ""
};

export const searchSlice = createSlice({
    name: "search",
    initialState: initialState,
    reducers: {
        updateKeyword: (state, action) => {
            state.keyword = action.payload;
        }
    }
});

export const { updateKeyword } = searchSlice.actions;
export default searchSlice.reducer;