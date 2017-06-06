import React from 'react';
import server from 'react-dom/server';
import cheerio from 'cheerio';
import { expect } from 'chai';

import FeatureDescription from './featureDescription';

describe('FeatureDescription component', () => {
  it('renders without crashing', () => {
    const staticMarkup = server.renderToStaticMarkup(<FeatureDescription />);
    const $ = cheerio.load(staticMarkup);
    expect($.root().children().first()).to.be.ok;
  });
});


it('has FeatureDescriptions', () => {
  const staticMarkup = server.renderToStaticMarkup(<FeatureDescription />);
  const $ = cheerio.load(staticMarkup);
  expect($.root().children().find('.row-icon')).to.have.length(1);
});
