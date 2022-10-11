import { createAsyncThunk } from '@reduxjs/toolkit';
import { giftsAPI } from 'services/giftsAPI';

const getGifts = createAsyncThunk(
    'gifts/get',
    async (_, { rejectWithValue, getState }) => {
        try {
            const { token: storedToken } = getState().auth;
            if (!storedToken) {
                return rejectWithValue();
            }
            const data = await giftsAPI.getGifts();
            return data;
        } catch (error) {
            return rejectWithValue({
                message: error.response.data.message,
                status: error.response.status,
            });
        }
    }
);

const buyGifts = createAsyncThunk(
    'gifts/buy',
    async (giftIds, { rejectWithValue }) => {
        console.log('giftIds');
        try {
            const data = await giftsAPI.buyGifts(giftIds);
            return data;
        } catch (error) {
            return rejectWithValue({
                message: error.response.data.message,
                status: error.response.status,
            });
        }
    }
);

const giftsOperations = { getGifts, buyGifts };

export default giftsOperations;
