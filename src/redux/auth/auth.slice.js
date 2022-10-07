import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initial-state.auth';
import authOperations from './operations.auth';

const setPending = state => {
  state.isLoading = true;
  state.error = null;
};

const setError = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [authOperations.register.pending]: setPending,
    [authOperations.register.fulfilled]: (state, { payload }) => {
      state.email = payload.user.email;
      state.token = payload.token;
      state.isLoading = false;
    },
    [authOperations.register.rejected]: setError,

    [authOperations.login.pending]: setPending,
    [authOperations.login.fulfilled]: (state, { payload }) => {
      state.email = payload.user.email;
      state.token = payload.token;
      state.isLoading = false;
    },
    [authOperations.login.rejected]: setError,

    [authOperations.logout.pending]: setPending,
    [authOperations.logout.fulfilled]: state => {
      state.email = '';
      state.token = null;
      state.isLoading = false;
    },
    [authOperations.logout.rejected]: setError,

    [authOperations.getUserInfo.pending]: state => {
      setPending(state);
      // state.isFetchingUserInfo = true;
    },
    [authOperations.getUserInfo.fulfilled]: (state, { payload }) => {
      state.email = payload.user.email;
      state.isLoading = false;
      // state.isFetchingUserInfo = false;
    },
    [authOperations.getUserInfo.rejected]: (state, action) => {
      setError(state, action);
      // state.isFetchingUserInfo = false;
    },
  },
});

export default authSlice.reducer;
