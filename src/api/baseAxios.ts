/* eslint-disable no-underscore-dangle */
import axios, { InternalAxiosRequestConfig } from 'axios';

const getRefreshToken = () => window.localStorage.getItem('refreshToken');

const { VITE_API_URL } = import.meta.env;

export const client = axios.create({
  baseURL: VITE_API_URL,
});

// TODO SET TOKEN ACCORDING TO NEEDS.
client.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');

  if (token) {
    return {
      ...config,
      headers: {
        ...config.headers,
        Authorization: `Bearer ${token}`,
      },
    } as InternalAxiosRequestConfig;
  }
  return config;
});

// TODO HANDLE ERRORS & TOKEN REFRESH ACCORDING TO NEEDS.
client.interceptors.response.use(undefined, async (error) => {
  const originalConfig = error.config;
  if (
    error.config.url === '/auth/refresh/'
  ) {
    localStorage.removeItem('token');
    localStorage.removeItem('refreshToken');
    return Promise.reject(error);
  }
  if (error.response) {
    if (
      error.response.data.code === 'token_not_valid'
      && !originalConfig._retry && error.config.url !== '/auth/login/'
    ) {
      originalConfig._retry = true;
      const refresh = getRefreshToken();

      return client.post('/auth/refresh/', { refresh })
        .then((res) => {
          const newToken = res.data.access;
          localStorage.setItem('token', newToken);

          return client(originalConfig);
        })
        .catch(() => {
          localStorage.removeItem('token');
          localStorage.removeItem('refreshToken');
        });
    }
  }
  return Promise.reject(error);
});
