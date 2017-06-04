import React from 'react';
import server from 'react-dom/server';
import cheerio from 'cheerio';
import { expect } from 'chai';

import App from './App';

describe('App component', () => {
  it('renders without crashing', () => {
    console.log('rendering');
    const staticMarkup = server.renderToStaticMarkup(<App />);
    const $ = cheerio.load(staticMarkup);
    expect($.root().children().first()).to.be.ok;
  });
});
