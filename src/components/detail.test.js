// Libs
import React from 'react';
import server from 'react-dom/server';
import cheerio from 'cheerio';
import { expect } from 'chai';

// Components
import Detail from './detail';

describe('Detail', () => {
  it('renders without crashing', () => {
    const staticMarkup = server.renderToStaticMarkup(<Detail value="test" />);
    const $ = cheerio.load(staticMarkup);
    expect($.root().first()).to.be.ok;
  });

  it('renders current selection', () => {
    const staticMarkup = server.renderToStaticMarkup(<Detail value="test" />);
    const $ = cheerio.load(staticMarkup);
    expect($.root().children().find('p').text()).contains('test');
  });

  it('renders an image', () => {
    const staticMarkup = server.renderToStaticMarkup(<Detail value="test" />);
    const $ = cheerio.load(staticMarkup);
    expect($.root().children().find('img').length).to.equal(0);
  });
});
