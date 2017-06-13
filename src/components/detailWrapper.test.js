import React from 'react';
import server from 'react-dom/server';
import cheerio from 'cheerio';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import DetailWrapper from './detailWrapper';


describe('Detail Wrapper', () => {
  const wrapper = shallow(<DetailWrapper />);
  it('renders without crashing', () => {
    const staticMarkup = server.renderToStaticMarkup(<DetailWrapper
      userData={{ interests: [] }}
      result={{}}
      test=""
    />);
    const $ = cheerio.load(staticMarkup);
    expect($.root().first()).to.be.ok;
  });
  it('renders a detail component when source is given', () => {
    wrapper.setState(
      { result: { pages: { randomNumber: { thumbnail: { source: 'alskdfj' } } } } });
    expect(wrapper.find('Detail').length).to.be.equal(1);
  });
});
