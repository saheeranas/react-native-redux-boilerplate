import {AxiosRequestHeaders} from 'axios';
import apiClient from './api-client';
const BASE_URL = 'http://10.0.2.2:4001';

const contentTypes: any = {
  json: 'application/json',
  mfd: 'multipart/form-data',
};

// Base function for GET requests
const get = (route: string) => {
  return apiClient(`${BASE_URL}/${route}`);
};

// Base function for POST requests
const post = async (
  route: string,
  {body, type = '', user = {}}: {body: any; type: string; user: any},
) => {
  let headers: AxiosRequestHeaders = {Accept: 'application/json'};
  if (user.token) {
    headers.Authorization = `Bearer ${user.token}`;
  }
  if (type !== '') {
    headers['Content-Type'] = contentTypes[type];
  }
  return apiClient({
    method: 'post',
    url: `${BASE_URL}/${route}`,
    headers,
    data: body,
  });
};

// Routes
const routes = {
  login: 'login',
  getNews: 'news',
};

export {routes, get, post};

export {login} from './auth';
export {getNews} from './news';
