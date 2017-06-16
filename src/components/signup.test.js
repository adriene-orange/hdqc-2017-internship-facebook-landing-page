import React from 'react';
import server from 'react-dom/server';
import cheerio from 'cheerio';
import { expect } from 'chai';
import Signup from './signup';
import store from '../store';

describe('Signup', () => {
  const StoreInstance = store();
  it('renders without crashing', () => {
    const staticMarkup = server.renderToStaticMarkup(<Signup store={StoreInstance} />);
    const $ = cheerio.load(staticMarkup);
    expect($.root().children().first()).to.be.ok;
  });
});
