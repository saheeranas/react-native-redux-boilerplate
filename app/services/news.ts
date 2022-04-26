import {routes, get} from './index';

export const getNews = () => {
  return get(`${routes.getNews}`);
};
