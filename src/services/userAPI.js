import { privateAPI } from './http';

const getUserInfo = async () => {
    const { data } = await privateAPI.get('/user/info');
    return data;
};

export const userAPI = {
    getUserInfo,
};
