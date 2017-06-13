import React from 'react';
import server from 'react-dom/server';
import cheerio from 'cheerio';
import { expect } from 'chai';

import Header from './header';
import store from '../store';

describe('Header component', () => {
  const StoreInstance = store();
  it('renders without crashing', () => {
    const staticMarkup = server.renderToStaticMarkup(<Header store={StoreInstance} />);
    const $ = cheerio.load(staticMarkup);
    expect($.root().children().first()).to.be.ok;
  });
});
