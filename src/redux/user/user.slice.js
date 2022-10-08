import { createSlice } from '@reduxjs/toolkit';
import userOperations from 'redux/user/operations.user';
import { initialState } from 'redux/user/initial-state.user';

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
    extraReducers: {
        [userOperations.getUserInfo.pending]: state => setPending(state),
        [userOperations.getUserInfo.fulfilled]: (state, { payload }) => {
            state.id = payload.user.id;
            state.email = payload.user.email;
            state.balance = payload.user.balance;
            state.isLoading = false;
        },
        [userOperations.getUserInfo.rejected]: (state, action) =>
            setError(state, action),
    },
});

export default userSlice.reducer;
