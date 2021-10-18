import {routes, post, get} from './index';

export const login = body => {
  return post(`${routes.login}`, {body});
};
