import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Form, Field } from 'react-final-form';
import { FormGroup } from 'patternfly-react';
import { TextField, TextareaField, SelectField, RadioGroup, CheckboxGroup, SubForm } from './form-fields';
import ComponentType, { configureContext } from '../renderer-context';
import MultipleChoiceList from './multiple-choice-list';

describe('Pf3 form fields', () => {
  const FormWrapper = ({ children, ...props }) => (
    <Form onSubmit={ jest.fn() } { ...props }>
      { () => (
        <ComponentType.Provider value={ configureContext({ formType: 'pf4' }) }>
          { children }
        </ComponentType.Provider>
      ) }
    </Form>
  );

  describe('<TextField />', () => {
    let initialProps;
    beforeEach(() => {
      initialProps = {
        name: 'text-field',
        type: 'text',
      };
    });

    it('should render correctly in valid state', () => {
      const wrapper = mount(
        <FormWrapper>
          <TextField { ...initialProps }/>
        </FormWrapper>
      );
      expect(toJson(wrapper.find(FormGroup))).toMatchSnapshot();
    });

    it('should render correctly in error state', () => {
      const wrapper = mount(
        <FormWrapper>
          <TextField { ...initialProps }/>
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
      expect(toJson(wrapper.find(FormGroup).first())).toMatchSnapshot();
    });

    it('should render correctly in valid state with helper text and description', () => {
      const wrapper = mount(
        <FormWrapper>
          <TextField { ...initialProps } helperText="i am helper text" description="i am description" />
        </FormWrapper>
      );
      expect(toJson(wrapper.find(FormGroup))).toMatchSnapshot();
    });
  });

  describe('<TextareaField />', () => {
    let initialProps;
    beforeEach(() => {
      initialProps = {
        name: 'textarea-field',
      };
    });

    it('should render correctly in valid state', () => {
      const wrapper = mount(
        <FormWrapper>
          <TextareaField { ...initialProps }/>
        </FormWrapper>
      );
      expect(toJson(wrapper.find(FormGroup))).toMatchSnapshot();
    });

    it('should render correctly in error state', () => {
      const wrapper = mount(
        <FormWrapper>
          <TextareaField { ...initialProps }/>
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
      expect(toJson(wrapper.find(FormGroup).first())).toMatchSnapshot();
    });

    it('should render correctly in valid state with helper text and description', () => {
      const wrapper = mount(
        <FormWrapper>
          <TextareaField { ...initialProps } helperText="i am helper text" description="i am description" />
        </FormWrapper>
      );
      expect(toJson(wrapper.find(FormGroup))).toMatchSnapshot();
    });
  });

  describe('<SelectField />', () => {
    let initialProps;
    beforeEach(() => {
      initialProps = {
        name: 'select-field',
        options: [{
          label: 'foo',
          value: 'foo',
        }, {
          label: 'bar',
          value: 'bar',
        }],
      };
    });

    it('should render correctly in valid state', () => {
      const wrapper = mount(
        <FormWrapper>
          <SelectField { ...initialProps }/>
        </FormWrapper>
      );
      expect(toJson(wrapper.find(FormGroup))).toMatchSnapshot();
    });

    it('should render correctly in error state', () => {
      const wrapper = mount(
        <FormWrapper>
          <SelectField { ...initialProps }/>
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
      expect(toJson(wrapper.find(FormGroup).first())).toMatchSnapshot();
    });

    it('should render correctly in valid state with helper text and description', () => {
      const wrapper = mount(
        <FormWrapper>
          <SelectField { ...initialProps } helperText="i am helper text" description="i am description" />
        </FormWrapper>
      );
      expect(toJson(wrapper.find(FormGroup))).toMatchSnapshot();
    });
  });

  describe('<RadioGroup />', () => {
    let initialProps;
    beforeEach(() => {
      initialProps = {
        name: 'radio-field',
        options: [{
          label: 'foo',
          value: 'foo',
        }, {
          label: 'bar',
          value: 'bar',
        }],
      };
    });

    it('should render correctly', () => {
      const wrapper = mount(
        <FormWrapper>
          <RadioGroup { ...initialProps }/>
        </FormWrapper>
      );
      expect(toJson(wrapper.find(FormGroup))).toMatchSnapshot();
    });
  });

  describe('<CheckboxGroup />', () => {
    let initialProps;
    beforeEach(() => {
      initialProps = {
        name: 'checkbox-field',
        label: 'checkbox-label',
        options: [{
          label: 'foo',
          value: 'foo',
        }, {
          label: 'bar',
          value: 'bar',
        }],
      };
    });

    it('should render multiple choice list', () => {
      const wrapper = mount(
        <FormWrapper>
          <CheckboxGroup { ...initialProps }/>
        </FormWrapper>
      );
      expect(wrapper.find(MultipleChoiceList)).toBeTruthy();
    });

    it('should render single checkbox', () => {
      const wrapper = mount(
        <FormWrapper>
          <CheckboxGroup { ...initialProps } options={ undefined }/>
        </FormWrapper>
      );
      expect(wrapper.find(MultipleChoiceList)).toBeTruthy();
    });
  });

  describe('<SubForm />', () => {
    it('should render subForm component with TextField', () => {
      const wrapper = mount(
        <FormWrapper>
          <SubForm
            fields={ [{
              component: 'text-field',
              name: 'nested-field',
            }] }
            name="sub-form"
            title="SubForm title"
            description="SubForm description"
            renderForm={ () => <div id="nested-item">Foo</div> }
          />
        </FormWrapper>
      );
      expect(toJson(wrapper.find(SubForm))).toMatchSnapshot();
    });
  });
});
