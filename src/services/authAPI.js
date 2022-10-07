import { privateAPI, publicAPI } from './http';

const registerUser = async profile => {
  const { data } = await publicAPI.post('/auth/register', profile);
  return data;
};

const loginUser = async loginData => {
  const { data } = await publicAPI.post('/auth/login', loginData);
  return data;
};

const logoutUser = async () => {
  console.log(privateAPI.defaults.headers.common.Authorization);
  await privateAPI.post(`/auth/logout`);
};

const getUserInfo = async () => {
  const { data } = await privateAPI.get('/user/info');
  return data;
};

export const authAPI = {
  registerUser,
  loginUser,
  logoutUser,
  getUserInfo,
};
