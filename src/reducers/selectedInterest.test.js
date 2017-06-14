import { expect } from 'chai';
import selectedInterest from './selectedInterest';

describe('selectedInterest reducer', () => {
  it('should return initial state', () => {
    expect(selectedInterest(undefined, {})).to.deep.equal(
      {},
    );
  });
  it('should handle selectedInterest', () => {
    expect(
      selectedInterest({}, {
        type: 'selectedInterest',
        subject: 'boxing',
      }),
    ).to.deep.equal({
      subject: 'boxing',
    });
  });
});
