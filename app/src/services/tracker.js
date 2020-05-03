import axios from 'axios';
import { AsyncStorage } from 'react-native';
import { ngrokIP } from '../env_keys';

const instance = axios.create({
  baseURL: ngrokIP, // closes in max 8 hours: FIXME: use env
});

instance.interceptors.request.use(
  async config => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
      return config;
    }
  },
  err => {
    Promise.reject(err);
  }
);

export default instance;
