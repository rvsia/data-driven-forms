import React from 'react';
import { mount } from 'enzyme'
import toJson from 'enzyme-to-json';
import Component from './index';

describe('Testing tests', () => {
  it('should pass', () => {
    expect(1).toEqual(1)
  });
  it('should render snapshot', () => {
    const wrapper = mount(<Component />)
    expect(toJson(wrapper)).toMatchSnapshot()
  });
});