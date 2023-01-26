import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
    redditData: [],
    isLoading: false,
    hasFailed: false
};

export const redditThunk = createAsyncThunk('lister/getRedditData',
    async (thunkAPI) => {
        const response = await fetch('/api');
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
