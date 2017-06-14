import { expect } from 'chai';
import handleSignup from './handleSignup';

describe('signedUp reducer', () => {
  it('should return initial state', () => {
    expect(handleSignup(undefined, {})).to.deep.equal(
      {
        signUpError: '',
        signedUp: false,
      },
    );
  });
  it('should return true if approved', () => {
    expect(handleSignup({}, {
      type: 'SIGNUP_APPROVED',
      signedUp: true,
    }));
  });
  it('should return false if rejected', () => {
    expect(handleSignup({}, {
      type: 'SIGNUP_APPROVED',
      signedUp: false,
    }));
  });
});
