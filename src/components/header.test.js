import React from 'react';
import server from 'react-dom/server';
import cheerio from 'cheerio';
import { expect } from 'chai';

import Header from './header';


describe('Header component', () => {
  it('renders without crashing', () => {
    const staticMarkup = server.renderToStaticMarkup(<Header />);
    const $ = cheerio.load(staticMarkup);
    expect($.root().children().first()).to.be.ok;
  });
  it('finds a button', () => {
    const staticMarkup = server.renderToStaticMarkup(<Header />);
    const $ = cheerio.load(staticMarkup);
    // console.log($);
    expect($.root().children().find('Button').length).to.equal(1);
  });
  it('finds two forms', () => {
    const staticMarkup = server.renderToStaticMarkup(<Header />);
    const $ = cheerio.load(staticMarkup);
    // console.log($);
    expect($.root().children().find('form').length).to.equal(1);
  });
});
