import React from 'react';
import server from 'react-dom/server';
import cheerio from 'cheerio';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import store from '../store';

import DetailWrapper from './detailWrapper';
// import Detail from './detail';


describe('Detail Wrapper', () => {
  const StoreInstance = store();
  const result = { pages: { randomNumber: { thumbnail: { source: 'alskdfj' } } } };
  const props = { value: '', userData: [{}, {}], result: { ...result }, dispatch: () => {} };

  it('renders without crashing', () => {
    const wrapper = shallow(<DetailWrapper store={StoreInstance} />);
    // const staticMarkup = server.renderToStaticMarkup(<DetailWrapper
    //   userData={{ interests: [] }}
    //   test=""
    //   store=
    // />);
    // const $ = cheerio.load(staticMarkup);
    // expect($.root().first()).to.be.ok;
    expect(wrapper).to.have.length(1);
  });
  /*it('renders a detail component when source is given', () => {
    const wrapper = shallow(<DetailWrapper {...props} store={StoreInstance} />);
    expect(wrapper.find('Detail').length).to.be.equal(1);
  });*/
});
