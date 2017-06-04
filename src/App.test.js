import React from 'react';
import server from 'react-dom/server';
import cheerio from 'cheerio';
import { expect } from 'chai';

import App from './App';

it('renders without crashing', () => {
  const staticMarkup = server.renderToStaticMarkup(<App />);
  const $ = cheerio.load(staticMarkup);
  expect($.root().children().first()).to.be.ok;
});
