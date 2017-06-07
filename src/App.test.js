// Libs
import React from 'react';
import server from 'react-dom/server';
import cheerio from 'cheerio';
import { expect } from 'chai';
import { mount } from 'enzyme';

// Components
import App from './App';

describe('App component', () => {
  it('renders without crashing', () => {
    const staticMarkup = server.renderToStaticMarkup(<App />);
    const $ = cheerio.load(staticMarkup);
    expect($.root().children().first()).to.be.ok;
  });

  it('renders success if true', () => {
    const wrapper = mount(<App />);
    expect(wrapper.find(Landing).length).to.be.equal(1);
  });
});
