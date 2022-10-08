import { createAsyncThunk } from '@reduxjs/toolkit';
import { authAPI } from 'services/authAPI';
import { token } from 'services/http';

const register = createAsyncThunk(
    'auth/register',
    async (credentials, { rejectWithValue }) => {
        try {
            const data = await authAPI.registerUser(credentials);
            token.set(data.token);
            return data;
        } catch (error) {
            return rejectWithValue({
                message: error.message,
                status: error.status,
            });
        }
    }
);

const login = createAsyncThunk(
    'auth/login',
    async (credentials, { rejectWithValue }) => {
        try {
            const data = await authAPI.loginUser(credentials);
            token.set(data.token);
            return data;
        } catch (error) {
            return rejectWithValue({
                message: error.message,
                status: error.status,
            });
        }
    }
);

const logout = createAsyncThunk(
    'auth/logout',
    async (_, { rejectWithValue }) => {
        try {
            await authAPI.logoutUser();
            token.unset();
        } catch (error) {
            return rejectWithValue({
                message: error.message,
                status: error.status,
            });
        }
    }
);

const authOperations = { register, login, logout };

export default authOperations;
