import axios from 'axios';
import statusHandler from './statusHandler';

// Add a request interceptor
axios.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    // console.log(config);
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  },
);

// Add a response interceptor
axios.interceptors.response.use(
  function (response) {
    // Do something with response data
    return response;
  },
  function (error) {
    // Do something with response error
    statusHandler(error);
    // console.log(error);
    return Promise.reject(error);
  },
);

export default axios;
