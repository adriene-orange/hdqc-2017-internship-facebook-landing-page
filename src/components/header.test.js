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

});
