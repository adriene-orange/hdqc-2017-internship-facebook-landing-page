import React from 'react';
import server from 'react-dom/server';
import cheerio from 'cheerio';
import { expect } from 'chai';

import LoginMessage from './loginMessage';

describe('Login Message component', () => {
  it('renders without crashing', () => {
    const staticMarkup = server.renderToStaticMarkup(<LoginMessage />);
    const $ = cheerio.load(staticMarkup);
    expect($.root().children().first()).to.be.ok;
  });

  it('has a paragraph', () => {
    const staticMarkup = server.renderToStaticMarkup(<LoginMessage />);
    const $ = cheerio.load(staticMarkup);
    expect($.root().find('p')).to.have.length(1);
  });
});
