import { privateAPI } from './http';

const updateTasks = async body => {
    const { data } = await privateAPI.patch('/task/active', body);
    return data;
};

const singleTaskActiveToggle = async (id, body) => {
    await privateAPI.patch(`​/task/single-active/${id}`, body);
};

const taskCompletedToggle = async (id, body) => {
    const { data } = await privateAPI.patch(`/task/switch/${id}`, body);
    return data;
};

// const addTask = async body => {
//     const { data } = await privateAPI.post(`/task`, body);
//     return data;
// };

export const tasksAPI = {
    updateTasks,
    singleTaskActiveToggle,
    taskCompletedToggle,
    // addTask,
};
