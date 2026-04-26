import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const apiClient = axios.create({
  baseURL: 'https://techeruditestaging.com/projects/plie-api/public/api/',
  timeout: 10000,
});

apiClient.interceptors.request.use(async config => {
  try {
    const raw = await AsyncStorage.getItem('persist:root');
    if (raw) {
      const root = JSON.parse(raw);
      const auth = JSON.parse(root.auth ?? '{}');
      const token = auth.token;
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
  } catch (_) {}
  return config;
});

apiClient.interceptors.response.use(
  res => res,
  error => {
    if (error.response?.status === 401) {}
    return Promise.reject(error);
  },
);
