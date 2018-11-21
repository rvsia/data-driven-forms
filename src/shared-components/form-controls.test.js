import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Button as Pf3Button } from 'patternfly-react';
import { Button as Pf4Button } from '@patternfly/react-core';
import FormControls from './form-controls';
import ComponentType, { configureContext } from '../renderer-context';

describe('<FormControls />', () => {
  let initialProps;
  beforeEach(() => {
    initialProps = {
      onSubmit: jest.fn(),
      onReset: jest.fn(),
      onCancel: jest.fn(),
    };
  });
  it('should render all pf3 form controls', () => {
    const wrapper = mount(
      <ComponentType.Provider value={ configureContext({ formType: 'pf3' }) }>
        <FormControls { ...initialProps } canReset />
      </ComponentType.Provider>
    );
    const buttons = wrapper.find(Pf3Button);
    expect(buttons).toHaveLength(3);
  });

  it('should render all form controls with custom labels', () => {
    const labels = {
      submitLabel: 'Foo',
      cancelLabel: 'Bar',
      resetLabel: 'quax',
    };
    const wrapper = mount(
      <ComponentType.Provider value={ configureContext({ formType: 'pf3' }) }>
        <FormControls { ...initialProps } { ...labels } />
      </ComponentType.Provider>
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should render all pf4 form controls', () => {
    const wrapper = mount(
      <ComponentType.Provider value={ configureContext({ formType: 'pf4' }) }>
        <FormControls { ...initialProps } canReset />
      </ComponentType.Provider>
    );
    const buttons = wrapper.find(Pf4Button);
    expect(buttons).toHaveLength(3);
  });
});
