import React from 'react';
import server from 'react-dom/server';
import cheerio from 'cheerio';
import { expect } from 'chai';

import FooterMap from './FooterMap';


describe('FooterMap component', () => {
  it('renders without crashing', () => {
    const staticMarkup = server.renderToStaticMarkup(<FooterMap />);
    const $ = cheerio.load(staticMarkup);
    expect($.root().children().first()).to.be.ok;
  });
  it('List items have ids', () => {
    const staticMarkup = server.renderToStaticMarkup(<FooterMap />);
    const $ = cheerio.load(staticMarkup);
    expect($('.footer-site-map').find('li').attr('key'));
    console.log($.root().children().find('ul').children()
    .toString());
    // expect($('li')
  });
});
