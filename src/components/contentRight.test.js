import React from 'react';
import server from 'react-dom/server';
import cheerio from 'cheerio';
import { expect } from 'chai';

import ContentRight from './contentRight';

describe('Content Right', () => {
  it('renders without crashing', () => {
    const staticMarkup = server.renderToStaticMarkup(<ContentRight />);
    const $ = cheerio.load(staticMarkup);
    expect($.root().children().first()).to.be.ok;
  });

  it('RightContent exists', () => {
    const staticMarkup = server.renderToStaticMarkup(<ContentRight />);
    const $ = cheerio.load(staticMarkup);
    expect($.root().find('.RightContent')).to.have.length(1);
  });

  it('RightSecond exists', () => {
    const staticMarkup = server.renderToStaticMarkup(<ContentRight />);
    const $ = cheerio.load(staticMarkup);
    expect($.root().find('.RightSecond')).to.have.length(1);
  });
});
