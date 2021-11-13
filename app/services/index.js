import apiClient from './api-client';
const BASE_URL = 'http://10.0.2.2:4001';

const contentTypes = {
  json: 'application/json',
};

// Base function for GET requests
const get = route => {
  return apiClient(`${BASE_URL}/${route}`);
};

// Base function for POST requests
const post = async (route, {body, type = '', user = {}}) => {
  let headers = {Accept: 'application/json'};
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
