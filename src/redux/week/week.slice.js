import { createSlice } from '@reduxjs/toolkit';
import { initialState } from 'redux/week/initial-state.week';
import userOperations from 'redux/user/operations.user';
import authOperations from 'redux/auth/operations.auth';
import tasksOperations from 'redux/tasks/operations.tasks';

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
        [userOperations.getUserInfo.pending]: setPending,
        [userOperations.getUserInfo.fulfilled]: (state, { payload }) => {
            state.startWeekDate = payload.week.startWeekDate;
            state.endWeekDate = payload.week.endWeekDate;
            state.rewardsGained = payload.week.rewardsGained;
            state.rewardsPlanned = payload.week.rewardsPlanned;
            state.isLoading = false;
        },
        [userOperations.getUserInfo.rejected]: setError,

        [authOperations.login.pending]: setPending,
        [authOperations.login.fulfilled]: (state, { payload }) => {
            state.startWeekDate = payload.week.startWeekDate;
            state.endWeekDate = payload.week.endWeekDate;
            state.rewardsGained = payload.week.rewardsGained;
            state.rewardsPlanned = payload.week.rewardsPlanned;
            state.isLoading = false;
        },
        [authOperations.login.rejected]: setError,

        [authOperations.register.pending]: setPending,
        [authOperations.register.fulfilled]: (state, { payload }) => {
            state.startWeekDate = payload.week.startWeekDate;
            state.endWeekDate = payload.week.endWeekDate;
            state.rewardsGained = payload.week.rewardsGained;
            state.rewardsPlanned = payload.week.rewardsPlanned;
            state.isLoading = false;
        },
        [authOperations.register.rejected]: setError,

        [tasksOperations.setActiveSingle.pending]: setPending,
        [tasksOperations.setActiveSingle.fulfilled]: (state, { payload }) => {
            state.rewardsPlanned = payload.updatedWeekPlannedRewards;
            state.isLoading = false;
        },
        [tasksOperations.setActiveSingle.rejected]: setError,

        [tasksOperations.toggleCompleted.pending]: setPending,
        [tasksOperations.toggleCompleted.fulfilled]: (state, { payload }) => {
            state.rewardsGained = payload.updatedWeekGainedRewards;
            state.isLoading = false;
        },
        [tasksOperations.toggleCompleted.rejected]: setError,
    },
});

export default weekSlice.reducer;
