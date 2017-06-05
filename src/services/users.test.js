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
  it('fetches a single existing user by username and password', () => {
    const existingUser = { username: 'hdqc', password: 'hdqc' };
    expect(doesUserExist(existingUser)).to.deep.equal(existingUser);
    serviceToTest.getUserByUsernameAndPassword(existingUser.username, existingUser.password)
    .then(
      (user) => {
        expect(doesUserExist(user)).to.deep.equal(existingUser);
      },
    );
  });
  it('rejects if a user with the username and password does not exist', () => {
    const existingUser = { username: 'does not exist', password: 'nope' };
    expect(doesUserExist(existingUser)).to.deep.equal(undefined);
    serviceToTest.getUserByUsernameAndPassword(existingUser.username, existingUser.password)
    .then(user => expect(user).to.not.be.ok)
    .catch(error => expect(error).to.deep.equal('User not found'));
  });
});
