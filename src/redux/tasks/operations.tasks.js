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
                message: error.response.data.message,
                status: error.response.status,
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
                message: error.response.data.message,
                status: error.response.status,
            });
        }
    }
);

const setActiveSingle = createAsyncThunk(
    'tasks/setActiveSingle',
    async ({ taskId, taskData }, { rejectWithValue, getState }) => {
        try {
            const data = await tasksAPI.setActiveSingleTask(taskId, taskData);
            const { items } = getState().tasks;
            if (!items.some(({ _id }) => _id === data.updatedTask.id)) {
                throw Error(
                    `setActiveSingle: unknown task id ${data.updatedTask.id}`
                );
            }
            return data;
        } catch (error) {
            return rejectWithValue({
                message: error.response.data.message,
                status: error.response.status,
            });
        }
    }
);

const toggleCompleted = createAsyncThunk(
    'tasks/toggleCompleted',
    async ({ taskId, taskData }, { rejectWithValue, getState }) => {
        try {
            const data = await tasksAPI.toggleCompletedTask(taskId, taskData);
            const { items } = getState().tasks;
            if (
                !items.some(({ taskId }) => taskId === data.updatedTask.taskId)
            ) {
                throw Error(
                    `toggleCompleted: unknown taskId ${data.updatedTask.taskId}`
                );
            }
            return data;
        } catch (error) {
            return rejectWithValue({
                message: error.response.data.message,
                status: error.response.status,
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
