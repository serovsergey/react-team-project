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
    state.isPatching = false;
};

const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    extraReducers: {
        [tasksOperations.createTask.pending]: setPending,
        [tasksOperations.createTask.fulfilled]: (state, { payload }) => {
            state.items.push(payload);
            state.isLoading = false;
        },
        [tasksOperations.createTask.rejected]: setError,

        [tasksOperations.setActive.pending]: setPending,
        [tasksOperations.setActive.fulfilled]: (state, { payload }) => {
            console.warn('Not implemented yet');
            state.isLoading = false;
        },
        [tasksOperations.setActive.rejected]: setError,

        [tasksOperations.setActiveSingle.pending]: setPending,
        [tasksOperations.setActiveSingle.fulfilled]: (state, { payload }) => {
            const updatedTaskIndex = state.items.findIndex(
                task => task._id === payload.updatedTask.id
            );
            console.log(updatedTaskIndex);
            state.items[updatedTaskIndex].days = payload.updatedTask.days;
            state.isLoading = false;
        },
        [tasksOperations.setActiveSingle.rejected]: setError,

        [tasksOperations.toggleCompleted.pending]: (state, { payload }) => {
            state.isPatching = true;
            state.error = '';
        },
        [tasksOperations.toggleCompleted.fulfilled]: (state, { payload }) => {
            const updatedTaskIndex = state.items.findIndex(
                task => task._id === payload.updatedTask.id
            );
            state.items[updatedTaskIndex].days = payload.updatedTask.days;
            // state.isLoading = false;
            state.isPatching = false;
        },
        [tasksOperations.toggleCompleted.rejected]: setError,

        [userOperations.getUserInfo.pending]: setPending,
        [userOperations.getUserInfo.fulfilled]: (state, { payload }) => {
            state.items = payload.week.tasks;
            state.isLoading = false;
        },
        [userOperations.getUserInfo.rejected]: setError,

        [authOperations.login.pending]: setPending,
        [authOperations.login.fulfilled]: (state, { payload }) => {
            state.items = payload.week.tasks;
            state.isLoading = false;
        },
        [authOperations.login.rejected]: setError,
    },
});

export default tasksSlice.reducer;
