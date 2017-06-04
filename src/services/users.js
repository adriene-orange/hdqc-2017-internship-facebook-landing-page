import * as store from '../data/store';

export const addUser = (username, password) => {
  // todo: dupe check & other validation
  store.users.push({ username, password });
  return Promise.resolve(true);
};
