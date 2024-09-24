import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://a6082e16137d39a5.mokky.dev',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

instance.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${window.localStorage.getItem('token')}`;
  return config;
});

export default instance;
