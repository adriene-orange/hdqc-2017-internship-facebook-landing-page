// Libs
import React from 'react';
import server from 'react-dom/server';
import cheerio from 'cheerio';
import { expect } from 'chai';
import { shallow } from 'enzyme';

// Components
import App from './App';
import Landing from './components/landing';
import Home from './components/home';

describe('App component', () => {
  const wrapper = shallow(<App />);

  it('renders without crashing', () => {
    const staticMarkup = server.renderToStaticMarkup(<App />);
    const $ = cheerio.load(staticMarkup);
    expect($.root().children().first()).to.be.ok;
  });

  it('renders Landing by default', () => {
    expect(wrapper.find(Landing).length).to.be.equal(1);
  });

  it('renders success message when state is set to true', () => {
    wrapper.setState({ username: 'bob' });
    expect(wrapper.find(Home)).to.have.length(1);
  });
});
