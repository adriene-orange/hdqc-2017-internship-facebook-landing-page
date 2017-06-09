// Libs
import React from 'react';
import server from 'react-dom/server';
import cheerio from 'cheerio';
import { expect } from 'chai';

// Components
import Detail from './detail';

describe('Detail', () => {
  it('renders without crashing', () => {
    const staticMarkup = server.renderToStaticMarkup(<Detail
      value="test"
      store={{ interests: [] }}
      result={{}}
    />);
    const $ = cheerio.load(staticMarkup);
    expect($.root().first()).to.be.ok;
  });

  it('renders current selection', () => {
    const staticMarkup = server.renderToStaticMarkup(
      <Detail
        value="test"
        store={{ interests: [] }}
        result={{ pages: { randomNumber: { thumbnail: { source: 'alskdfj' } } } }}
      />);
    const $ = cheerio.load(staticMarkup);
    expect($.root().children().find('.detail-header').text()).contains('test');
  });

  it('renders selection\'s image src attribute', () => {
    const staticMarkup = server.renderToStaticMarkup(
      <Detail
        value="test"
        store={{ interests: [{ subject: 'test', image: 'www.google.com' }] }}
        result={{ pages: { boo: { thumbnail: { source: 'alskdfj' } } } }}
      />);
    const $ = cheerio.load(staticMarkup);
    expect($.root().children().find('img').attr('src')).contains('alskdfj');
  });

  it('renders an image when a selection is made', () => {
    const staticMarkup = server.renderToStaticMarkup(
      <Detail
        value="test"
        store={{ interests: [{ subject: 'test', image: 'www.google.com' }] }}
        result={{ pages: { randomNumber: { thumbnail: { source: 'alskdfj' } } } }}
      />);
    const $ = cheerio.load(staticMarkup);
    expect($.root().children().find('img').length).to.equal(1);
  });

  it('does not render an image if no selection is made', () => {
    const staticMarkup = server.renderToStaticMarkup(
      <Detail
        value="test"
        store={{ interests: [] }}
        result={{ pages: { boo: { thumbnail: { source: 'alskdfj' } } } }}
      />);
    const $ = cheerio.load(staticMarkup);
    expect($.root().children().find('img').length).to.equal(0);
  });
});
