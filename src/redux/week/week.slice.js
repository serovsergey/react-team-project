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
        [userOperations.getUserInfo.fulfilled]: (state, { payload }) => {
            state.startWeekDate = payload.week.startWeekDate;
            state.endWeekDate = payload.week.endWeekDate;
            state.rewardsGained = payload.week.rewardsGained;
            state.rewardsPlanned = payload.week.rewardsPlanned;
        },
        [authOperations.login.fulfilled]: (state, { payload }) => {
            state.startWeekDate = payload.week.startWeekDate;
            state.endWeekDate = payload.week.endWeekDate;
            state.rewardsGained = payload.week.rewardsGained;
            state.rewardsPlanned = payload.week.rewardsPlanned;
        },
        [authOperations.register.fulfilled]: (state, { payload }) => {
            state.startWeekDate = payload.week.startWeekDate;
            state.endWeekDate = payload.week.endWeekDate;
            state.rewardsGained = payload.week.rewardsGained;
            state.rewardsPlanned = payload.week.rewardsPlanned;
        },
        [tasksOperations.setActiveSingle.fulfilled]: (state, { payload }) => {
            state.rewardsPlanned = payload.updatedWeekPlannedRewards;
        },
        [tasksOperations.toggleCompleted.fulfilled]: (state, { payload }) => {
            state.rewardsGained = payload.updatedWeekGainedRewards;
        },
    },
});

export default weekSlice.reducer;
