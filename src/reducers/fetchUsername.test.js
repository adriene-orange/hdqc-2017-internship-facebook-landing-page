import { expect } from 'chai';
import fetchUsername from './fetchUsername';

describe('fetchUsername reducer', () => {
  it('should return initial state', () => {
    expect(fetchUsername(undefined, {})).to.deep.equal(
      {},
    );
  });
  it('should handle fetchedUsername', () => {
    expect(
      fetchUsername({}, {
        type: 'fetchedUsername',
        username: 'bob',
      }),
    ).to.deep.equal({
      username: 'bob',
    });
  });
});
