import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initial-state.common';

const commonSlice = createSlice({
    name: 'common',
    initialState,
    reducers: {
        setCurrentDate(state, { payload }) {
            state.currentDate = payload;
        },
    },
});

export default commonSlice.reducer;
export const commonActions = commonSlice.actions;
