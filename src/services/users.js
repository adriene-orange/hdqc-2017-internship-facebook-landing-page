import _ from 'lodash';
import * as store from '../data/store';

const setUsernameByUsername = username => _.find(store.users, user => user.username === username);

export const addUser = (username, password, firstname,
  lastname, gender, birthmonth, birthday, birthyear) => {
  // todo: dupe check & other validation
  if (!username) {
    return Promise.reject('addUser requires a valid username');
  }

  if (!password) {
    return Promise.reject('addUser requires a valid password');
  }

  if (setUsernameByUsername(username)) {
    return Promise.reject('username already exists');
  }

  store.users.push({
    username,
    password,
    firstname,
    lastname,
    gender,
    birthmonth,
    birthday,
    birthyear });

  console.log(username,
  password,
  firstname,
  lastname,
  gender,
  birthmonth,
  birthday,
  birthyear);

  return Promise.resolve(true);
};

export const setUsernameByUsernameAndPassword = (username, password) => {
  const user = _.find(store.users, existingUser =>
    existingUser.username === username && existingUser.password === password,
  );
  return (user) ? Promise.resolve(user) : Promise.reject('User not found');
};
