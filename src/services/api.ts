import { ACCESS_TOKEN_KEY } from '@/constants/auth';
import axios from 'axios';

export const createAxiosInstance = (path: string, version = 'v1') => {
  const instance = axios.create({
    baseURL: `${import.meta.env.VITE_API_URL}/${version}/${path}`,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  instance.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem(ACCESS_TOKEN_KEY);

      if (config.headers && token) config.headers.Authorization = `Bearer ${token}`;

      return config;
    },
    (error) => {
      return Promise.reject(error);
    },
  );

  return instance;
};

export const api = createAxiosInstance('');
