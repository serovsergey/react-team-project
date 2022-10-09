import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initial-state.common';

const commonSlice = createSlice({
    name: 'common',
    initialState,
    reducers: {
        setCurrentDay(state, { payload }) {
            state.currentDay = payload;
        },
    },
});

export default commonSlice.reducer;
export const commonActions = commonSlice.actions;
