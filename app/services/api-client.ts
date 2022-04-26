import axios from 'axios';
import statusHandler from './statusHandler';

// Add a request interceptor
axios.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);

// Add a response interceptor
axios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    statusHandler(error);
    return Promise.reject(error);
  },
);

export default axios;
