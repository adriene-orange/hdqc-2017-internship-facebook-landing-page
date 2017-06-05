import React from 'react';
import server from 'react-dom/server';
import cheerio from 'cheerio';
import { expect } from 'chai';

import Footer from './footer';


describe('Footer component', () => {
  it('renders without crashing', () => {
    const staticMarkup = server.renderToStaticMarkup(<Footer />);
    const $ = cheerio.load(staticMarkup);
    expect($.root().children().first()).to.be.ok;
  });
  it('Finds 9 columns(FooterMaps)', () => {
    const staticMarkup = server.renderToStaticMarkup(<Footer />);
    const $ = cheerio.load(staticMarkup);
    expect($('.footer-site-map').find('ul').length).to.equal(9);
  });
  it('finds a button', () => {
    const staticMarkup = server.renderToStaticMarkup(<Footer />);
    const $ = cheerio.load(staticMarkup);
    expect($.root().children().find('button').length).to.equal(1);
  });
});
