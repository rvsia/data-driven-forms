import React from 'react';
import { mount } from 'enzyme';
import { Form } from 'react-final-form';
import Condition from './condition';
import toJson from 'enzyme-to-json';

describe('<Condition />', () => {
  const childId = 'condition-child';

  it('should not render children if condition is not met', () => {
    const wrapper = mount(
      <Form onSubmit={ jest.fn() }>
        { () => (
          <Condition when="foo" is="bar">
            <div id={ childId }></div>
          </Condition>
        ) }
      </Form>
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should render children if condition is met', () => {
    const wrapper = mount(
      <Form onSubmit={ jest.fn() } initialValues={{
        foo: 'bar',
      }}>
        { () => (
          <Condition when="foo" is="bar">
            <div id={ childId }></div>
          </Condition>
        ) }
      </Form>
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should not render children if value is not in array', () => {
    const wrapper = mount(
      <Form onSubmit={ jest.fn() } initialValues={{
        foo: 'pox',
      }}>
        { () => (
          <Condition when="foo" is={ [ 'bar', 'fux', 'quax' ] }>
            <div id={ childId }></div>
          </Condition>
        ) }
      </Form>
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should render children if value is in array', () => {
    const wrapper = mount(
      <Form onSubmit={ jest.fn() } initialValues={{
        foo: 'bar',
      }}>
        { () => (
          <Condition when="foo" is={ [ 'bar', 'fux', 'quax' ] }>
            <div id={ childId }></div>
          </Condition>
        ) }
      </Form>
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
