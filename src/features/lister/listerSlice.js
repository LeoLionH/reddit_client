import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
    redditData: {
        meta: {},
        data: []
    },
    isLoading: false,
    hasFailed: false
};

export const redditThunk = createAsyncThunk('lister/getRedditData',
    async (keyword) => {
        const response = await fetch(`/api?keyword=${keyword}`);
        const json = await response.json();
        console.log(json);
        return json;
    });

export const listerSlice = createSlice({
    name: "lister",
    initialState: initialState,
    reducers: {
        isLoading: (state) => {
            state.isLoading = true;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(redditThunk.pending, (state) => {
                state.isLoading = true;
                state.hasFailed = false;
            })
            .addCase(redditThunk.fulfilled, (state, action) => {
                state.isLoading = false;
                state.hasFailed = false;
                state.redditData = action.payload;
            })
    }
});

export const { isLoading, getRedditData } = listerSlice.actions;
export default listerSlice.reducer;
