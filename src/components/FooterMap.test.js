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
});
