import { expect } from 'chai';
import _ from 'lodash';

import * as serviceToTest from './users';
import * as store from '../data/store';

const doesUserExist = user =>
  _.find(store.users, existingUser =>
    existingUser.username === user.username && existingUser.password === user.password,
  );

describe('addUser', () => {
  it('adds a new user', () => {
    const newUser = { username: 'yo', password: 'filet' };
    expect(doesUserExist(newUser)).to.equal(undefined);
    serviceToTest.addUser(newUser.username, newUser.password)
    .then(
      () => {
        expect(doesUserExist(newUser)).to.deep.equal(newUser);
      },
    );
  });
});

describe('getUserByUsernameAndPassword', () => {
  it('fetches a single user by username and password', () => {
    const existingUser = { username: 'hdqc', password: 'hdqc' };
    expect(doesUserExist(existingUser)).to.deep.equal(existingUser);
    serviceToTest.getUserByUsernameAndPassword(existingUser.username, existingUser.password)
    .then(
      (user) => {
        expect(doesUserExist(user)).to.deep.equal(existingUser);
      },
    );
  });
});
