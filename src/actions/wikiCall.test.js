import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';
import { expect } from 'chai';
// import request from 'superagent';
// import fs from 'fs';
import wikiMockResponse from './wikiMockResponse.json';
import * as wikiTest from './wikiCall';
// import * as wikiApiCall from '../services/apiCall';


const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('wikipedia api call asynchronous actions', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  it('creates DATA_ACCEPTED when api call is complete', () => {
    const title = 'Art';

    nock('https://en.wikipedia.org:443', { encodedQueryParams: true })
      .get('/w/api.php')
      .query({ action: 'query', origin: '*', titles: 'Art', prop: 'pageimages', imlimit: 1, format: 'json', pithumbsize: '500' })
      .reply(200, { result: wikiMockResponse });

    // nock.recorder.rec();
    // nock(`${wikiApiCall.wikiUrl}/?action=query&origin=*&
    // titles=Art&prop=pageimages&imlimit=1&format=json&pithumbsize=500`)
    //   .get('')
    //   .reply(200);

    // console.log(JSON.parse('testing wiki response', wikiMockResponse));

    const expectedActions = [
      { type: wikiTest.DATA_REQUESTED, loading: true },
      { type: wikiTest.DATA_ACCEPTED, result: wikiMockResponse, loading: true },
    ];

    const store = mockStore({ result: {}, loading: false });
    console.log(store.getActions());
    return store.dispatch(wikiTest.getWikiData(title)).then(() => {
      expect(store.getActions()).to.deep.equal(expectedActions);
    });
  });
});
