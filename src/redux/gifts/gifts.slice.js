import { createSlice } from '@reduxjs/toolkit';
import { initialState } from 'redux/gifts/initial-state.gifts';
import giftsOperations from './operations.gifts';

const setPending = state => {
    state.isLoading = true;
    state.error = null;
};

const setError = (state, { payload }) => {
    state.isLoading = false;
    state.error = payload;
};

const giftsSlice = createSlice({
    name: 'gifts',
    initialState,
    extraReducers: {
        [giftsOperations.getGifts.pending]: setPending,
        [giftsOperations.getGifts.fulfilled]: (state, { payload }) => {
            state.items = payload.ruGifts;
            state.isLoading = false;
        },
        [giftsOperations.getGifts.rejected]: setError,
    },
});

export default giftsSlice.reducer;
