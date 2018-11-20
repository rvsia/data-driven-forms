import React from 'react';
import { mount } from 'enzyme';
import { Form } from 'react-final-form';
import ComponentMapper from '../component-mapper';
import { components } from '../constants';
import ComponentType, { configureContext } from '../renderer-context';
import { TextField } from '../pf-3-form-fields/form-fields';

describe('Common component mapper', () => {
  it('should render pf3 component mapper with custom text field component', () => {
    const wrapper = mount(
      <ComponentType.Provider value={ configureContext({
        formType: 'pf3',
        customComponentMapper: (component) =>
          ({ [components.TEXT_FIELD]: () => <div className="text-field-component">Text field component</div> })[component],
      }) }>
        <ComponentMapper
          component={ components.TEXT_FIELD }
          formOptions={{}}
          componentProps={{}}
        />
      </ComponentType.Provider>
    );
    expect(wrapper.find('.text-field-component')).toHaveLength(1);
  });

  it('should render pf3 component mapper with default text field component', () => {
    const wrapper = mount(
      <ComponentType.Provider value={ configureContext({ formType: 'pf3' }) }>
        <Form onSubmit={ jest.fn() }>
          { () => (
            <ComponentMapper
              component={ components.TEXT_FIELD }
              formOptions={{}}
              componentProps={{
                name: 'Foo',
              }}
            />
          ) }
        </Form>
      </ComponentType.Provider>
    );
    expect(wrapper.find(TextField)).toBeTruthy();
  });
});
