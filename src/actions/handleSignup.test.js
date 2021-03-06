import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { expect } from 'chai';
import * as tested from './handleSignup';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('handleSignup ', () => {
  it('should initiate the initiateSignup action', () => {
    const expectedAction = {
      type: tested.INITIATE_SIGNUP,
    };
    expect(tested.initiateSignup()).to.deep.equal(expectedAction);
  });

  it('should initiate the signUpApproved action', () => {
    const data = true;
    const expectedAction = {
      type: tested.SIGNUP_APPROVED,
      signedUp: data,
    };
    expect(tested.signUpApproved(data)).to.deep.equal(expectedAction);
  });

  it('should initiate the signUpRejected action', () => {
    const error = 'failed';
    const expectedAction = {
      type: tested.SIGNUP_REJECTED,
      signedUp: false,
      signUpError: error,
    };
    expect(tested.signUpRejected(error)).to.deep.equal(expectedAction);
  });

  describe('async actions', () => {
    it('creates SIGNUP_APPROVED when grabbing sign up information has completed', () => {
      const expectedActions = [
        { type: tested.INITIATE_SIGNUP },
        { type: tested.SIGNUP_APPROVED, signedUp: true },
      ];

      const store = mockStore({ signUpError: '', signedUp: false });
      const inputs = { username: 'yolo', password: 'filet', firstname: 'Yo', lastname: 'Man', gender: 'Male', birthmonth: 1, birthday: 1, birthyear: 1999 };
      return store.dispatch(tested.handleSignup(inputs))
        .then(() => {
          expect(store.getActions()).to.deep.equal(expectedActions);
        });
    });


    it('creates SIGNUP_REJECTED with empty password', () => {
      const expectedActions = [
        { type: tested.INITIATE_SIGNUP },
        { type: tested.SIGNUP_REJECTED, signedUp: false, signUpError: 'addUser requires a valid password' },
      ];

      const store = mockStore({ signUpError: '', signedUp: false });
      const inputs = { username: 'yolo', password: '', firstname: 'Yo', lastname: 'Man', gender: 'Male', birthmonth: 1, birthday: 1, birthyear: 1999 };
      return store.dispatch(tested.handleSignup(inputs))
        .then(() => {
          expect(store.getActions()).to.deep.equal(expectedActions);
        });
    });
  });
});
