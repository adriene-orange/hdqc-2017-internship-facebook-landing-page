import React from 'react';
import server from 'react-dom/server';
import cheerio from 'cheerio';
import { expect } from 'chai';

import ContentLeft from './contentLeft';

describe('Content Left', () => {
  it('renders without crashing', () => {
    const staticMarkup = server.renderToStaticMarkup(<ContentLeft />);
    const $ = cheerio.load(staticMarkup);
    expect($.root().children().first()).to.be.ok;
  });

  it('ContentLeft exists', () => {
    const staticMarkup = server.renderToStaticMarkup(<ContentLeft />);
    const $ = cheerio.load(staticMarkup);
    expect($.root().find('.contentLeft')).to.have.length(1);
  });
});
