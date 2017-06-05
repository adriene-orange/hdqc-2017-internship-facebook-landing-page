import _ from 'lodash';
import * as store from '../data/store';

export const addUser = (username, password) => {
  // todo: dupe check & other validation
  if (!username) {
    return Promise.reject('addUser requires a valid username');
  }

  if (!password) {
    return Promise.reject('addUser requires a valid password');
  }

  store.users.push({ username, password });
  return Promise.resolve(true);
};

export const getUserByUsernameAndPassword = (username, password) => {
  const user = _.find(store.users, existingUser =>
    existingUser.username === username && existingUser.password === password,
  );
  return (user) ? Promise.resolve(user) : Promise.reject('User not found');
};
