import {routes, post} from './index';

export const login = (body: any) => {
  return post(`${routes.login}`, {body});
};
