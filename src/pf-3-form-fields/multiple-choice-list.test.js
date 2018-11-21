import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Form, Field } from 'react-final-form';
import ComponentType, { configureContext } from '../renderer-context';
import MultipleChoiceList from './multiple-choice-list';

describe('Pf3 <MultipleChoiceList />', () => {
  let FormWrapper;
  let multipleChoiceDefinition;
  beforeEach(() => {
    FormWrapper = ({ initialValues, children }) => ( // eslint-disable-line
      <Form onSubmit={ jest.fn() } initialValues={ initialValues }>
        { () => (
          <ComponentType.Provider value={ configureContext({ formType: 'pf3' }) }>
            { children }
          </ComponentType.Provider>
        ) }
      </Form>
    );
    multipleChoiceDefinition = {
      key: 'multipleChoicesList',
      title: 'A multiple choices list',
      name: 'multipleChoicesList',
      label: 'A multiple choices list',
      component: 'checkbox-field',
      dataType: 'string',
      validate: [],
      options: [{
        label: 'foo',
        value: 'foo',
      }, {
        value: 'bar',
        label: 'bar',
      }, {
        value: 'fuzz',
        label: 'fuzz',
      }, {
        value: 'qux',
        label: 'qux',
      },
      ],
      type: 'checkbox',
    };
  });

  it('should render correctly', () => {
    const wrapper = mount(
      <FormWrapper>
        <MultipleChoiceList { ...multipleChoiceDefinition }/>
      </FormWrapper>
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should render correctly with error message', () => {
    const wrapper = mount(
      <FormWrapper>
        <MultipleChoiceList { ...multipleChoiceDefinition } validate={ [ () => 'Error message' ] }/>
      </FormWrapper>
    );
    wrapper.find(Field).first().instance().setState(prevState => ({
      state: {
        ...prevState.state,
        error: 'Has some error',
        touched: true,
      },
    }));
    wrapper.find(Form).first().update();
    expect(toJson(wrapper.find(Field).first())).toMatchSnapshot();
  });

  it('should correctly add value to formState', () => {
    const wrapper = mount(
      <FormWrapper>
        <MultipleChoiceList { ...multipleChoiceDefinition }/>
      </FormWrapper>
    );

    // simulate click on checkbox with value qux
    wrapper.find('input[type="checkbox"]').last().simulate('change', { target: { checked: true }});
    expect(wrapper.find(Form).first().instance().state.state.values.multipleChoicesList).toEqual([ 'qux' ]);
  });

  it('should correctly remove value from formState', () => {
    const wrapper = mount(
      <FormWrapper initialValues={{
        multipleChoicesList: [ 'foo', 'bar', 'fuzz', 'qux' ],
      }}>
        <MultipleChoiceList { ...multipleChoiceDefinition }/>
      </FormWrapper>
    );

    // simulate click on checkbox with value fuzz
    wrapper.find('input[type="checkbox"]').at(2).simulate('change', { target: { checked: false }});
    expect(wrapper.find(Form).first().instance().state.state.values.multipleChoicesList).toEqual([ 'foo', 'bar', 'qux' ]);
  });
});
