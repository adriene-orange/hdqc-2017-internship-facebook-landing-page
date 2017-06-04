import { expect } from 'chai';
import _ from 'lodash';

import * as serviceToTest from './users';
import * as store from '../data/store';

describe('addUser', () => {
  const doesUserExist = user =>
    _.find(store.users, existingUser =>
      existingUser.username === user.username && existingUser.password === user.password
    );

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
