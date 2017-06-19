import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Header from './header';
import store from '../../store';

describe('Header component', () => {
  const StoreInstance = store();
  const wrapper = shallow(<Header store={StoreInstance} />);
  it('renders without crashing', () => {
    expect(wrapper.children().first()).to.be.ok;
  });
});
