import apiClient from './api-client';
const BASE_URL = 'https://hacker-news.firebaseio.com/v0';

const contentTypes = {
  json: 'application/json',
};

// Base function for GET requests
const get = route => {
  return apiClient(`${BASE_URL}/${route}`);
};

// Base function for POST requests
// export const _post = async (api, body, {user = {}, type = ''}) => {
//   let headers = {Accept: 'application/json'};
//   if (user['token']) {
//     headers['Authorization'] = `Bearer ${user['token']}`;
//   }
//   if (type !== '') {
//     headers['Content-Type'] = contentTypes[type];
//   }
//   return fetch(`${process.env.REACT_APP_API_URI}/${api}`, {
//     method: 'post',
//     headers,
//     body: body,
//   }).then(res => statusHandler(res));
// };

// Status Handler
const statusHandler = async res => {
  switch (res.status) {
    case 200: {
      let data = await res.json();
      return data;
    }
    case 403: {
      // localStorage.clear();
      // window.location.reload();
      return res;
    }
    default: {
      let errors = await res.json();
      throw errors;
    }
  }
};

// Routes
const routes = {
  getNews: '/news',
};

export {get};

export {getNews} from './news';
