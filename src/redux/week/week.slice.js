import { createSlice } from '@reduxjs/toolkit';
import authOperations from 'redux/auth/operations.auth';
import { initialState } from 'redux/tasks/initial-state.tasks';

const setPending = state => {
    state.isLoading = true;
    state.error = null;
};

const setError = (state, { payload }) => {
    state.isLoading = false;
    state.error = payload;
};

const weekSlice = createSlice({
    name: 'week',
    initialState,
    extraReducers: {
        [authOperations.getUserInfo.fulfilled]: (state, { payload }) => {
            // state.items = payload.week.week;
        },
    },
});

export default weekSlice.reducer;
