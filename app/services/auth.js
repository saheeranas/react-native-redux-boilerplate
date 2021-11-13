import {routes, post} from './index';

export const login = body => {
  return post(`${routes.login}`, {body});
};
