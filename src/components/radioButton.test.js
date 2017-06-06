import React from 'react';
import server from 'react-dom/server';
import cheerio from 'cheerio';
import { expect } from 'chai';

import Radio from './radioButton';

describe('Radio component', () => {
  it('renders without crashing', () => {
    const staticMarkup = server.renderToStaticMarkup(<Radio />);
    const $ = cheerio.load(staticMarkup);
    expect($.root().children().first()).to.be.ok;
  });

  it('has a radio button', () => {
    const staticMarkup = server.renderToStaticMarkup(<Radio />);
    const $ = cheerio.load(staticMarkup);
    expect($.root().children().find('input[type="radio"]')).to.have.length(2);
  });
});
