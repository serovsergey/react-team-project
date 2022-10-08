const { createAsyncThunk } = require('@reduxjs/toolkit');
const { token } = require('services/http');
const { tasksAPI } = require('services/tasksAPI');

// in form:
// const bodyFormData = new FormData();
// bodyFormData.append('title', 'title-val');
// bodyFormData.append('reward', 'reward-val');
// bodyFormData.append('file', imageFile);
// https://stackoverflow.com/questions/47630163/axios-post-request-to-send-form-data
// const createTask = createAsyncThunk(
//     'auth/createTask',
//     async (taskData, { rejectWithValue }) => {
//         try {
//             const data = await tasksAPI.addTask(taskData);
//             token.set(data.token);
//             return data;
//         } catch (error) {
//             return rejectWithValue({
//                 message: error.message,
//                 status: error.response.status,
//             });
//         }
//     }
// );

// const tasksOperations = { createTask };

// export default tasksOperations;
