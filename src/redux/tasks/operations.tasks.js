import { createAsyncThunk } from '@reduxjs/toolkit';
import { tasksAPI } from 'services/tasksAPI';

// in form:
// const bodyFormData = new FormData();
// bodyFormData.append('title', 'title-val');
// bodyFormData.append('reward', 'reward-val');
// bodyFormData.append('file', imageFile);
// https://stackoverflow.com/questions/47630163/axios-post-request-to-send-form-data
const createTask = createAsyncThunk(
    'tasks/createTask',
    async (taskData, { rejectWithValue }) => {
        try {
            const data = await tasksAPI.addTask(taskData);
            return data;
        } catch (error) {
            return rejectWithValue({
                message: error.message,
                status: error.status,
            });
        }
    }
);

const setActive = createAsyncThunk(
    'tasks/setActive',
    async (taskData, { rejectWithValue }) => {
        try {
            const data = await tasksAPI.setActiveTask(taskData);
            return data;
        } catch (error) {
            return rejectWithValue({
                message: error.message,
                status: error.status,
            });
        }
    }
);

const setActiveSingle = createAsyncThunk(
    'tasks/setActiveSingle',
    async ({ id, taskData }, { rejectWithValue, getState }) => {
        try {
            const data = await tasksAPI.setActiveSingleTask(id, taskData);
            const { items } = getState().tasks;
            if (!items.some(({ id }) => id === data.updatedTask.id)) {
                throw Error(
                    `setActiveSingle: unknown task id ${data.updatedTask.id}`
                );
            }
            return data;
        } catch (error) {
            return rejectWithValue({
                message: error.message,
                status: error.status,
            });
        }
    }
);

const toggleCompleted = createAsyncThunk(
    'tasks/setActiveSingle',
    async ({ id, taskData }, { rejectWithValue, getState }) => {
        try {
            const data = await tasksAPI.toggleCompletedTask(id, taskData);
            const { items } = getState().tasks;
            if (!items.some(({ id }) => id === data.updatedTask.id)) {
                throw Error(
                    `toggleCompleted: unknown task id ${data.updatedTask.id}`
                );
            }
            return data;
        } catch (error) {
            return rejectWithValue({
                message: error.message,
                status: error.status,
            });
        }
    }
);

const tasksOperations = {
    createTask,
    setActive,
    setActiveSingle,
    toggleCompleted,
};

export default tasksOperations;
