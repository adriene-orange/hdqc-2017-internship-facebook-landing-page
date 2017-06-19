import React from 'react';
import { expect } from 'chai';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import ContentRight from './contentRight';
import Login from '../Login/login';
import store from '../../store';

describe('Content Right', () => {
  const StoreInstance = store();
  const wrapper = mount(<Provider store={StoreInstance}><ContentRight /></Provider>);
  it('renders without crashing', () => {
    expect(wrapper).to.have.length(1);
  });

  it('renders a Login component', () => {
    expect(wrapper.contains(<Login classStyle="mobile-loginElements" />)).to.equal(true);
  });

  it('renders a signup header', () => {
    expect(wrapper.contains(<h1 className="sign-up">Sign Up</h1>)).to.equal(true);
  });
});
