import React from 'react';
import server from 'react-dom/server';
import cheerio from 'cheerio';
import { expect } from 'chai';
import Signup from './signup';
import store from '../store';

describe('Signup', () => {
  const StoreInstance = store();
  const staticMarkup = server.renderToStaticMarkup(<Signup store={StoreInstance} />);
  const $ = cheerio.load(staticMarkup);
  it('renders without crashing', () => {
    expect($.root().children().first()).to.be.ok;
  });
  it('renders 7 input forms', () => {
    expect($.root().children().find('input').length).to.equal(7);
  });
  it('renders a create account button', () => {
    expect($.root().children().find('.CreateAccount-button').length).to.equal(1);
  });
  it('renders a birthday form', () => {
    expect($.root().children().find('select').length).to.equal(3);
  });
});
