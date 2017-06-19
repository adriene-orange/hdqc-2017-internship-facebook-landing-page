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
      userData={{ interests: [] }}
      imageUrl={{}}
    />);
    const $ = cheerio.load(staticMarkup);
    expect($.root().first()).to.be.ok;
  });

  it('renders current selection', () => {
    const staticMarkup = server.renderToStaticMarkup(
      <Detail
        value="test"
        userData={{ interests: [] }}
        imageUrl=""
      />);
    const $ = cheerio.load(staticMarkup);
    expect($.root().children().find('.detail-header').text()).contains('test');
  });

  // TODO: Fix this test!!!
  // it('renders an content when a selection is made', () => {
  //   const staticMarkup = server.renderToStaticMarkup(
  //     <Detail
  //       value="Art"
  //       userData={{ interests: [{ subject: 'Art', image: 'www.google.com' }] }}
  //       imageUrl=""
  //     />);
  //   const $ = cheerio.load(staticMarkup);
  //   console.log($.root().children().first().children().toString());
  //   expect($.root().children().find('img').length).to.equal(1);
  // });

  it('asks for a selection if no selection is made', () => {
    const staticMarkup = server.renderToStaticMarkup(
      <Detail
        value=""
        userData={{ interests: [] }}
      />);
    const $ = cheerio.load(staticMarkup);
    expect($.root().children().find('p').text()).to.equal(' Please select an interest from the list ');
  });

  it('renders a p tag if no source is given', () => {
    const staticMarkup = server.renderToStaticMarkup(
      <Detail
        value="test"
        userData={{ interests: [] }}
        imageUrl={{ pages: { boo: { thumbnail: { source: 'alskdfj' } } } }}
      />);
    const $ = cheerio.load(staticMarkup);
    expect($.root().children().find('p').length).to.equal(1);
  });
});
