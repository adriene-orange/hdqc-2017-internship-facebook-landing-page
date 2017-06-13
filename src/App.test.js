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
import store from './store';

describe('App component', () => {
  const StoreInstance = store();
  const wrapper = shallow(<App store={StoreInstance} />);

  it('renders without crashing', () => {
    expect(wrapper).to.have.length(1);
  });

  it('renders Landing by default', () => {
    expect(wrapper.find(Landing).length).to.be.equal(1);
  });

  it('renders Home when given a username', () => {
    wrapper.setProps({ username: 'hdqc' });
    expect(wrapper.find(Home)).to.have.length(1);
  });
});
