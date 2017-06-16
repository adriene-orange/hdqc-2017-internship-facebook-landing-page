import React from 'react';
import server from 'react-dom/server';
import cheerio from 'cheerio';
import { expect } from 'chai';
import Login from './login';
import store from '../store';

describe('Login component', () => {
  const StoreInstance = store();
  it('renders without crashing', () => {
    const staticMarkup = server.renderToStaticMarkup(<Login store={StoreInstance} />);
    const $ = cheerio.load(staticMarkup);
    expect($.root().children().first()).to.be.ok;
  });
  it('finds a button', () => {
    const staticMarkup = server.renderToStaticMarkup(<Login store={StoreInstance} />);
    const $ = cheerio.load(staticMarkup);
    expect($.root().children().find('Button').length).to.equal(1);
  });
  it('finds one form', () => {
    const staticMarkup = server.renderToStaticMarkup(<Login store={StoreInstance} />);
    const $ = cheerio.load(staticMarkup);
    expect($.root().children().find('form').length).to.equal(1);
  });
  it('finds error message', () => {
    const staticMarkup = server.renderToStaticMarkup(<Login store={StoreInstance} />);
    const $ = cheerio.load(staticMarkup);
    expect($.root().children().find('.login-message').length).to.equal(1);
  });
});
