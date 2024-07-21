import axios from 'axios';
import {BEARER_TOKEN, BASE_URL} from '@env';

const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    Accept: 'application/json',
  },
});

apiClient.interceptors.request.use(
  function (config) {
    if (config.headers) {
      config.headers.Authorization = `Bearer ${BEARER_TOKEN}`;
      config.headers['Content-Type'] = 'application/json';
      config.headers.Accept = 'application/json';
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);

apiClient.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  },
);

export default apiClient;
