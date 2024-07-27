import { User, UserAuth } from '@/interfaces/user';
import { createAxiosInstance } from './api';

const api = createAxiosInstance('auth');

export const signUp = async (credentials: {
  name: string;
  email: string;
  password: string;
}): Promise<UserAuth> => {
  const { data } = await api.post('register', credentials);
  return data;
};

export const signIn = async (credentials: {
  email: string;
  password: string;
}): Promise<UserAuth> => {
  const { data } = await api.post('login', credentials);
  return data;
};

export const refreshToken = async (refreshToken: string): Promise<any> => {
  const { data } = await api.post('refresh-tokens', { refreshToken });
  return data;
};

export const me = async (accessToken: string): Promise<User> => {
  const { data } = await api.get('me', {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return data;
};
