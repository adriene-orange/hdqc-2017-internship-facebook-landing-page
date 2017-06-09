import { expect } from 'chai';
import _ from 'lodash';

import * as serviceToTest from './users';
import * as store from '../data/store';

const doesUserExist = user =>
  _.find(store.users, existingUser =>
    existingUser.username === user.username && existingUser.password === user.password,
  );

describe('addUser', () => {
  describe('successes', () => {
    it('adds a new user when passed in username and password parameters', (done) => {
      const newUser = { username: 'yo', password: 'filet', firstname: 'Yo', lastname: 'Man', gender: 'Male', birthmonth: 1, birthday: 1, birthyear: 1999 };
      expect(doesUserExist(newUser)).to.equal(undefined);
      serviceToTest.addUser(newUser.username, newUser.password,
        newUser.firstname, newUser.lastname, newUser.gender,
        newUser.birthmonth, newUser.birthday, newUser.birthyear)
      .then(
        () => {
          expect(doesUserExist(newUser)).to.deep.equal(newUser);
          done();
        },
      );
    });
  });
  describe('failures', () => {
    it('fails if the username is empty', (done) => {
      const noUsername = { username: '', password: 'filet' };
      serviceToTest.addUser(noUsername.username, noUsername.password)
      .catch(
        (error) => {
          expect(error).to.deep.equal('addUser requires a valid username');
          done();
        },
      );
    });
    it('fails if the password is empty', (done) => {
      const noPassword = { username: 'itsMe', password: '' };
      serviceToTest.addUser(noPassword.username, noPassword.password)
      .catch(
        (error) => {
          expect(error).to.deep.equal('addUser requires a valid password');
          done();
        },
      );
    });
    it('fails if the user exists', (done) => {
      const existingUsername = { username: 'hdqc', password: 'whatever' };
      serviceToTest.addUser(existingUsername.username, existingUsername.password)
      .catch(
        (error) => {
          expect(error).to.deep.equal('username already exists');
          done();
        },
      );
    });
  });
});

describe('fetchUsernameByUsernameAndPassword', () => {
  describe('successes', () => {
    it('fetches a single existing user by username and password', (done) => {
      const existingUser = { username: 'hdqc', password: 'hdqc' };
      expect(doesUserExist(existingUser)).to.deep.equal(existingUser);
      serviceToTest.fetchUsernameByUsernameAndPassword(existingUser.username, existingUser.password)
      .then(
        (user) => {
          expect(doesUserExist(user)).to.deep.equal(existingUser);
          done();
        },
      );
    });
  });
  describe('failures', () => {
    it('rejects if a user with the username and password does not exist', () => {
      const existingUser = { username: 'does not exist', password: 'nope' };
      expect(doesUserExist(existingUser)).to.deep.equal(undefined);
      serviceToTest.fetchUsernameByUsernameAndPassword(existingUser.username, existingUser.password)
      .then(user => expect(user).to.not.be.ok)
      .catch(error => expect(error).to.deep.equal('User not found'));
    });
  });
});
