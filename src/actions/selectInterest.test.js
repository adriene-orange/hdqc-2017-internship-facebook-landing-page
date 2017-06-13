import { expect } from 'chai';
import * as tested from './selectInterest';

describe('selectInterest ', () => {
  it('returns expected output', () => {
    const subject = 'dog';
    const expectedAction = {
      type: 'selectedInterest',
      subject,
    };
    expect(tested.updateInterest(subject)).to.deep.equal(expectedAction);
  });


  it('fails with wrong input', () => {
    const subject = 'dog';
    const expectedAction = {
      type: 'selectedInterest',
      subject,
    };
    expect(tested.updateInterest(!subject)).to.not.deep.equal(expectedAction);
  });
});
