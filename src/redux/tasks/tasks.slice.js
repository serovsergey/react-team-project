import { createSlice } from '@reduxjs/toolkit';
import authOperations from 'redux/auth/operations.auth';
import { initialState } from 'redux/tasks/initial-state.tasks';
import userOperations from 'redux/user/operations.user';
import tasksOperations from './operations.tasks';

const setPending = state => {
    state.isLoading = true;
    state.error = null;
};

const setError = (state, { payload }) => {
    state.isLoading = false;
    state.error = payload;
};

const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    extraReducers: {
        [tasksOperations.createTask.pending]: setPending,
        [tasksOperations.createTask.fulfilled]: (state, { payload }) => {
            state.items.push(payload);
        },
        [tasksOperations.createTask.rejected]: setError,

        [tasksOperations.setActive.pending]: setPending,
        [tasksOperations.setActive.fulfilled]: (state, { payload }) => {
            console.warn('Not implemented yet');
        },
        [tasksOperations.setActive.rejected]: setError,

        [tasksOperations.setActiveSingle.pending]: setPending,
        [tasksOperations.setActiveSingle.fulfilled]: (state, { payload }) => {
            const updatedTaskIndex = state.items.findIndex(
                task => task.id === payload.updatedTask.id
            );
            state.items[updatedTaskIndex].days = payload.updatedTask.days;
        },
        [tasksOperations.setActiveSingle.rejected]: setError,

        [tasksOperations.toggleCompleted.pending]: setPending,
        [tasksOperations.toggleCompleted.fulfilled]: (state, { payload }) => {
            const updatedTaskIndex = state.items.findIndex(
                task => task.id === payload.updatedTask.id
            );
            state.items[updatedTaskIndex].days = payload.updatedTask.days;
        },
        [tasksOperations.toggleCompleted.rejected]: setError,

        [userOperations.getUserInfo.pending]: setPending,
        [userOperations.getUserInfo.fulfilled]: (state, { payload }) => {
            state.items = payload.week.tasks;
        },
        [userOperations.getUserInfo.rejected]: setError,

        [authOperations.login.pending]: setPending,
        [authOperations.login.fulfilled]: (state, { payload }) => {
            state.items = payload.week.tasks;
        },
        [authOperations.login.rejected]: setError,
    },
});

export default tasksSlice.reducer;
