import { createSlice } from '@reduxjs/toolkit';
import userOperations from 'redux/user/operations.user';
import { initialState } from 'redux/user/initial-state.user';
import tasksOperations from 'redux/tasks/operations.tasks';
import authOperations from 'redux/auth/operations.auth';
import giftsOperations from 'redux/gifts/operations.gifts';

const setPending = state => {
    state.isLoading = true;
    state.error = null;
};

const setError = (state, { payload }) => {
    state.isLoading = false;
    state.error = payload;
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setToken(state, { payload }) {
            state.token = payload;
        },
    },
    extraReducers: {
        [userOperations.getUserInfo.pending]: setPending,
        [userOperations.getUserInfo.fulfilled]: (state, { payload }) => {
            state.id = payload.user.id;
            state.email = payload.user.email;
            state.balance = payload.user.balance;
            state.isLoading = false;
        },
        [userOperations.getUserInfo.rejected]: setError,

        [authOperations.login.pending]: setPending,
        [authOperations.login.fulfilled]: (state, { payload }) => {
            state.id = payload.user.id;
            state.email = payload.user.email;
            state.balance = payload.user.balance;
        },
        [authOperations.login.rejected]: setError,

        [authOperations.register.pending]: setPending,
        [authOperations.register.fulfilled]: (state, { payload }) => {
            state.id = payload.user.id;
            state.email = payload.user.email;
            state.balance = payload.user.balance;
        },
        [authOperations.register.rejected]: setError,

        [authOperations.logout.pending]: setPending,
        [authOperations.logout.fulfilled]: state => {
            state.id = initialState.id;
            state.email = initialState.email;
            state.balance = initialState.balance;
            state.purchasedGiftIds = initialState.purchasedGiftIds;
        },
        [authOperations.logout.rejected]: setError,

        [tasksOperations.toggleCompleted.pending]: setPending,
        [tasksOperations.toggleCompleted.fulfilled]: (state, { payload }) => {
            state.balance = payload.updatedBalance;
        },
        [tasksOperations.toggleCompleted.rejected]: setError,

        [giftsOperations.buyGifts.pending]: state => {
            state.isLoading = true;
            state.error = null;
            state.purchasedGiftIds = initialState.purchasedGiftIds;
        },
        [giftsOperations.buyGifts.fulfilled]: (state, { payload }) => {
            state.balance = payload.updatedBalance;
            state.purchasedGiftIds = payload.purchasedGiftIds;
            state.isLoading = false;
        },
        [giftsOperations.buyGifts.rejected]: setError,
    },
});

export default userSlice.reducer;
export const userActions = userSlice.actions;
