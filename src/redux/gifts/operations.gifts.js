import { createAsyncThunk } from '@reduxjs/toolkit';
import { giftsAPI } from 'services/giftsAPI';

const getGifts = createAsyncThunk(
    'gifts/get',
    async (_, { rejectWithValue }) => {
        try {
            const data = await giftsAPI.getGifts();
            return data;
        } catch (error) {
            return rejectWithValue({
                message: error.message,
                status: error.status,
            });
        }
    }
);

const buyGifts = createAsyncThunk(
    'gifts/buy',
    async (giftIds, { rejectWithValue }) => {
        try {
            const data = await giftsAPI.buyGifts(giftIds);
            return data;
        } catch (error) {
            return rejectWithValue({
                message: error.message,
                status: error.status,
            });
        }
    }
);

const giftsOperations = { getGifts, buyGifts };

export default giftsOperations;
