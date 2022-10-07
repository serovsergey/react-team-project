import axios from 'axios';

export const privateAPI = axios.create({
  baseURL: 'https://kidslike-v1-backend.goit.global',
});

export const publicAPI = axios.create({
  baseURL: 'https://kidslike-v1-backend.goit.global',
});

export const token = {
  set(token) {
    privateAPI.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    privateAPI.defaults.headers.common.Authorization = null;
  },
};
