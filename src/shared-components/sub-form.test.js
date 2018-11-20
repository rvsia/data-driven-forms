import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import ComponentType, { configureContext } from '../renderer-context';
import SubForm from './sub-form';

describe('<SubForm />', () => {
  it('should render with title and description', () => {
    const wrapper = mount(
      <ComponentType.Provider value={ configureContext({ formType: 'pf3' }) }>
        <SubForm title="Foo" description="Bar" fields={ [] } renderForm={ () => <div>Foo</div> } />
      </ComponentType.Provider>
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should render with title', () => {
    const wrapper = mount(
      <ComponentType.Provider value={ configureContext({ formType: 'pf3' }) }>
        <SubForm title="Foo" fields={ [] } renderForm={ () => <div>Foo</div> } />
      </ComponentType.Provider>
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should render with description', () => {
    const wrapper = mount(
      <ComponentType.Provider value={ configureContext({ formType: 'pf3' }) }>
        <SubForm description="Bar" fields={ [] } renderForm={ () => <div>Foo</div> } />
      </ComponentType.Provider>
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should render only with fields', () => {
    const wrapper = mount(
      <ComponentType.Provider value={ configureContext({ formType: 'pf3' }) }>
        <SubForm fields={ [] } renderForm={ () => <div>Foo</div> } />
      </ComponentType.Provider>
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
