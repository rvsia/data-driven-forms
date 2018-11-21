import React from 'react';
import { mount } from 'enzyme';
import { Form } from 'react-final-form';
import { FieldArray } from 'react-final-form-arrays';
import { Button } from 'patternfly-react';
import arrayMutators from 'final-form-arrays';
import toJson from 'enzyme-to-json';
import renderArrayForm from './array-form-component';
import ComponentType, { configureContext } from '../renderer-context';

describe('renderArrayForm component', () => {
  const fieldMock = {
    title: 'Foo',
    description: 'bar',
    fields: [{
      name: 'innerItem',
      component: 'text-field',
    }],
    key: 'Foo',
  };

  it('should render array field with fixed items', () => {
    const wrapper = mount(
      <ComponentType.Provider value={ configureContext({ formType: 'pf3' }) }>
        <Form onSubmit={ jest.fn() }>
          { () => renderArrayForm({
            title: 'Foo',
            description: 'bar',
            fields: [],
            additionalItems: {
              field: [],
            },
          }, {
            hasFixedItems: true,
            renderForm: () => <div>Dynamic part</div>,
          }) }
        </Form>
      </ComponentType.Provider>
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should render array field without fixed items', () => {
    const wrapper = mount(
      <ComponentType.Provider value={ configureContext({ formType: 'pf3' }) }>
        <Form onSubmit={ jest.fn() }
          mutators={{ ...arrayMutators }}
        >
          { () => renderArrayForm({
            title: 'Foo',
            description: 'bar',
            fields: [],
            additionalItems: {
              field: [],
            },
          }, {
            hasFixedItems: false,
            renderForm: () => <div>Dynamic part</div>,
          }) }
        </Form>
      </ComponentType.Provider>
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should add new field to array field', () => {
    const wrapper = mount(
      <ComponentType.Provider value={ configureContext({ formType: 'pf3' }) }>
        <Form onSubmit={ jest.fn() }
          mutators={{ ...arrayMutators }}
        >
          { () => renderArrayForm(fieldMock, {
            hasFixedItems: false,
            renderForm: () => <div>Dynamic part</div>,
          }) }
        </Form>
      </ComponentType.Provider>
    );
    expect(wrapper.find(FieldArray).instance().context.reactFinalForm.getState().values).toEqual({});

    // Click on button that ads new item to array field
    wrapper.find(Button).simulate('click');
    expect(wrapper.find(FieldArray).instance().context.reactFinalForm.getState().values).toEqual({
      Foo: expect.any(Array),
    });
  });

  it('should render items from initial values', () => {
    const wrapper = mount(
      <ComponentType.Provider value={ configureContext({ formType: 'pf3' }) }>
        <Form onSubmit={ jest.fn() }
          mutators={{ ...arrayMutators }}
          initialValues={{
            Foo: [ 'bar', 'quax' ],
          }}
        >
          { () => renderArrayForm(fieldMock, {
            hasFixedItems: false,
            renderForm: () => <div>Dynamic part</div>,
          }) }
        </Form>
      </ComponentType.Provider>
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should remove item from array field', () => {
    const wrapper = mount(
      <ComponentType.Provider value={ configureContext({ formType: 'pf3' }) }>
        <Form onSubmit={ jest.fn() }
          mutators={{ ...arrayMutators }}
          initialValues={{
            Foo: [ 'bar', 'quax' ],
          }}
        >
          { () => renderArrayForm(fieldMock, {
            hasFixedItems: false,
            renderForm: () => <div>Dynamic part</div>,
          }) }
        </Form>
      </ComponentType.Provider>
    );

    expect(wrapper.find(FieldArray).instance().context.reactFinalForm.getState().values).toEqual({
      Foo: [ 'bar', 'quax' ],
    });

    // click on remove button
    wrapper.find('.btn-danger').first().simulate('click');
    expect(wrapper.find(FieldArray).instance().context.reactFinalForm.getState().values).toEqual({
      Foo: [ 'quax' ],
    });
  });
});
