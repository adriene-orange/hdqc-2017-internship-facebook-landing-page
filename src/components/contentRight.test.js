import React from 'react';
import server from 'react-dom/server';
import cheerio from 'cheerio';
import { expect } from 'chai';

import { Provider } from 'react-redux';
import ContentRight from './contentRight';

import store from '../store';

describe('Content Right', () => {
  const StoreInstance = store();
  // const wrappedContent = WrappedComponent => (
  //   <Provider store={StoreInstance}>
  //     <WrappedComponent />
  //   </Provider>
  // );
  it('renders without crashing', () => {
    const staticMarkup = server.renderToStaticMarkup(<ContentRight store={StoreInstance} />);
    const $ = cheerio.load(staticMarkup);
    expect($.root().children().first()).to.be.ok;
  });

  it('RightContent exists', () => {
    const staticMarkup = server.renderToStaticMarkup(<ContentRight store={StoreInstance} />);
    const $ = cheerio.load(staticMarkup);
    expect($.root().find('.RightContent')).to.have.length(1);
  });

  it('RightSecond exists', () => {
    const staticMarkup = server.renderToStaticMarkup(<ContentRight store={StoreInstance} />);
    const $ = cheerio.load(staticMarkup);
    expect($.root().find('.RightSecond')).to.have.length(1);
  });
});
