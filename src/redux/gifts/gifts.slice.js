import { createSlice } from '@reduxjs/toolkit';
import authOperations from 'redux/auth/operations.auth';
import { initialState } from 'redux/tasks/initial-state.tasks';
import tasksOperations from './operations.tasks';

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
        // [giftsOperations.createTask.pending]: setPending,
        // [giftsOperations.createTask.fulfilled]: (state, { payload }) => {
        //     state.items = payload.week.gifts;
        //     state.isLoading = false;
        // },
        // [giftsOperations.createTask.rejected]: setError,
        // [authOperations.getUserInfo.fulfilled]: (state, { payload }) => {
        //     state.items = payload.week.gifts;
        // },
    },
});

export default giftsSlice.reducer;
