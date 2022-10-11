import { privateAPI } from './http';

const setActiveTask = async body => {
    const { data } = await privateAPI.patch('/task/active', body);
    return data;
};

const setActiveSingleTask = async (id, body) => {
    const { data } = await privateAPI.patch(`​/task/single-active/${id}`, body);
    return data;
};

const toggleCompletedTask = async (id, body) => {
    const { data } = await privateAPI.patch(`/task/switch/${id}`, body);
    return data;
};

const addTask = async taskData => {
    console.log(taskData)
    const { data } = await privateAPI.post(`/task`, taskData);
    // const { data } = await privateAPI.post(`/task`, {
    //     data: taskData,
    //     headers: { 'Content-Type': 'multipart/form-data' },
    // });
    return data;
};

export const tasksAPI = {
    setActiveTask,
    setActiveSingleTask,
    toggleCompletedTask,
    addTask,
};
