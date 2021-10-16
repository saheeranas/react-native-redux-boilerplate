import {routes, post, get} from './index';

export const login = body => {
  //   return fetch('/').then(res => res.json());
  return post(`${routes.login}`, {body});
};
