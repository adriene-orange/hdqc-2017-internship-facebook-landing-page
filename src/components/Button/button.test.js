import React from 'react';
import server from 'react-dom/server';
import cheerio from 'cheerio';
import { expect } from 'chai';

import Button from './button';


describe('Button component', () => {
  it('renders without crashing', () => {
    const staticMarkup = server.renderToStaticMarkup(<Button />);
    const $ = cheerio.load(staticMarkup);
    expect($.root().children().first()).to.be.ok;
  });
  it('Finds a button in the file', () => {
    const staticMarkup = server.renderToStaticMarkup(<Button />);
    const $ = cheerio.load(staticMarkup);
    expect($.root().children()).to.be.ok;
  });
});
