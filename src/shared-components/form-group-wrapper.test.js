import React from 'react';
import { mount } from 'enzyme';
import { Form, Field } from 'react-final-form';
import FormGroupWrapper from './form-group-wrapper';

describe('<FormGroupWrapper />', () => {
  it('should wrap given component in <Field/> component', () => {
    const DummyComponent = props => <input { ...props } />;
    const wrapperProps = {
      name: 'foo',
      id: 'bar',
      type: 'number',
      validate: [ jest.fn() ],
      formField: DummyComponent,
    };

    let wrapper = mount(
      <Form onSubmit={ jest.fn() }>
        { () => (
          <FormGroupWrapper { ...wrapperProps } />
        ) }
      </Form>
    );

    const finalFormField = wrapper.find(Field);
    expect(finalFormField.props()).toEqual(expect.objectContaining({
      name: 'foo',
      id: 'bar',
    }));

    const fieldComponent = wrapper.find(DummyComponent);
    expect(fieldComponent.props()).toEqual({
      id: 'bar',
      type: 'number',
      input: expect.objectContaining({
        onChange: expect.any(Function),
        value: expect.anything(),
      }),
      meta: expect.objectContaining({
        error: undefined,
        pristine: true,
        touched: false,
      }),
    });

    /**Mount even if no validation rules are passed */
    wrapper = mount(
      <Form onSubmit={ jest.fn() }>
        { () => (
          <FormGroupWrapper { ...wrapperProps } validate={ undefined } />
        ) }
      </Form>
    );
  });
});
