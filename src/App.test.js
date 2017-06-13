// Libs
import React from 'react';
import server from 'react-dom/server';
import cheerio from 'cheerio';
import { expect } from 'chai';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
// import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store'

// Components
import App from './App';
import Landing from './components/landing';
import Home from './components/home';
import store from './store';
import * as fetchUsername from './actions/fetchUsername';

describe('App component', () => {
  // const middlewares = [];
  // const mockStore = configureStore(middlewares);
  const StoreInstance = store();
  const wrapper = mount(<Provider store={StoreInstance}><App /></Provider>);

  it('renders without crashing', () => {
    expect(wrapper).to.have.length(1);
  });

  it('renders Landing by default', () => {
    expect(wrapper.contains(<Landing />)).to.equal(true);
  });

  it('renders Home when given a username', () => {
    // const props = { username: 'hdqc' };
    // const component = mount(<Provider store={StoreInstance}><App {...props} /> </Provider>);
    const home = wrapper.find('.home');
    expect(home).to.have.length(1);
  });
});
