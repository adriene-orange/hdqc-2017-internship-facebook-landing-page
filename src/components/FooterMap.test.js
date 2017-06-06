import React from 'react';
import server from 'react-dom/server';
import cheerio from 'cheerio';
import { expect } from 'chai';

import FooterMap from './FooterMap';


describe('FooterMap component', () => {
  it('renders without crashing', () => {
    const staticMarkup = server.renderToStaticMarkup(<FooterMap />);
    const $ = cheerio.load(staticMarkup);
    expect($.root().children().first()).to.be.ok;
  });

  it('renders one ul tag', () => {
    const staticMarkup = server.renderToStaticMarkup(<FooterMap />);
    const $ = cheerio.load(staticMarkup);
    expect($.root().find('ul').length).to.equal(1);
  });

  it('Finds ul in file', () => {
    const staticMarkup = server.renderToStaticMarkup(<FooterMap />);
    const $ = cheerio.load(staticMarkup);
    expect($.root().children()).to.be.ok;
  });
});
