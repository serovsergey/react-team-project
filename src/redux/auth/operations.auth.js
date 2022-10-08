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
                status: error.response.status,
            });
        }
    }
);

const login = createAsyncThunk(
    'auth/login',
    async (credentials, { rejectWithValue }) => {
        try {
            const data = await authAPI.loginUser(credentials);
            console.log(data);
            token.set(data.token);
            return data;
        } catch (error) {
            return rejectWithValue({
                message: error.message,
                status: error.response.status,
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
                status: error.response.status,
            });
        }
    }
);

const getUserInfo = createAsyncThunk(
    'auth/getUserInfo',
    async (_, { rejectWithValue, getState }) => {
        try {
            const { token: storedToken } = getState().auth;
            token.set(storedToken);
            if (!storedToken) {
                return rejectWithValue();
            }
            const data = await authAPI.getUserInfo();
            return data;
        } catch (error) {
            token.unset();
            return rejectWithValue({
                message: error.message,
                status: error.status,
            });
        }
    }
);

const authOperations = { register, login, logout, getUserInfo };

export default authOperations;
