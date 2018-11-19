import React from 'react';

import {
  TextInput,
  FormGroup,
  TextContent,
  Text,
  TextVariants,
  TextArea,
  Select,
  SelectOption,
  Checkbox,
  Radio,
  GridItem,
} from '@patternfly/react-core';
import PropTypes from 'prop-types';
import { Field } from 'react-final-form';
import { components } from '../constants';
import { __ } from '../global-functions';
import Condition from '../shared-components/condition';
import FormGroupWrapper from '../shared-components/form-group-wrapper';
import { composeValidators } from '../helpers';
import MultipleChoiceList from './multiple-choice-list';
import NestedForm from '../shared-components/sub-form';

const selectComponent = ({
  componentType,
  input,
  options,
  isReadOnly,
  isDisabled,
  ...rest
}) =>
  ({
    [components.TEXT_FIELD]: () => (
      <TextInput
        { ...input }
        { ...rest }
        isReadOnly={ isReadOnly }
        isDisabled={ isDisabled }
      />
    ),
    [components.TEXTAREA_FIELD]: () => <TextArea { ...input } { ...rest } />,
    [components.SELECT_COMPONENT]: () => (
      <Select { ...input } { ...rest }>
        { options.map(props => (
          <SelectOption
            key={ props.value || props.label }
            { ...props }
            label={ props.label.toString() }
          />
        )) }
      </Select>
    ),
    [components.CHECKBOX]: () => <Checkbox { ...input } { ...rest } />,
    [components.RADIO]: () => (
      <Radio
        { ...input }
        { ...rest }
        value={ !!input.value }
        onChange={ () => input.onChange(input.value) }
      />
    ),
  }[componentType]);

const FinalFormField = ({
  componentType,
  label,
  isRequired,
  helperText,
  meta,
  description,
  ...rest
}) => {
  const { error, touched } = meta;
  const showError = touched && error;

  return (
    <GridItem span={ 12 }>
      <FormGroup
        isRequired={ isRequired }
        label={ __(label) }
        fieldId={ rest.id }
        isValid={ !showError }
        helperText={ __(helperText) }
        helperTextInvalid={ __(meta.error) }
      >
        { description && (
          <TextContent>
            <Text component={ TextVariants.small }>
              { __(description) }
            </Text>
          </TextContent>
        ) }
        { selectComponent({
          componentType,
          ...rest,
          isValid: !showError,
        })() }
      </FormGroup>
    </GridItem>
  );
};

FinalFormField.propTypes = {
  componentType: PropTypes.string.isRequired,
  label: PropTypes.string,
  isRequired: PropTypes.bool,
  helperText: PropTypes.string,
  meta: PropTypes.object.isRequired,
  description: PropTypes.string,
};

FinalFormField.defaultProps = {
  isRequired: false,
  description: undefined,
};

const SingleChoiceList = ({ validate, ...props }) => (
  <Field
    { ...props }
    validate={ composeValidators(...(props.validate || [])) }
    render={ ({
      input,
      meta,
      options,
      label,
      isRequired,
      helperText,
      ...rest
    }) => {
      const { error, touched } = meta;
      const showError = touched && error;
      return (
        <FormGroup
          label={ __(label) }
          isRequired={ isRequired }
          fieldId={ rest.id }
          helperText={ __(helperText) }
          helperTextInvalid={ __(meta.error) }
          isValid={ !showError }
        >
          { options.map(option => (
            <Field
              id={ `${rest.id}-${option.value}` }
              key={ `${props.name}-${option.value}` }
              name={ props.name }
              label={ __(option.label) }
              value={ option.value }
              aria-label={ option['aria-label'] || option.label }
              type="radio"
              componentType={ components.RADIO }
              render={ props => selectComponent(props)() }
            />
          )) }
        </FormGroup>
      );
    } }
  />
);

const SingleCheckboxField = ({ isReadOnly, helperText, ...props }) => (
  <Field
    { ...props }
    validate={ composeValidators(...(props.validate || [])) }
    type="checkbox"
    render={ rest => selectComponent({ ...rest })() }
  />
);

const CheckboxGroupField = ({ options, ...rest }) =>
  options ? (
    <MultipleChoiceList options={ options } { ...rest } />
  ) : (
    <SingleCheckboxField
      aria-label={ rest['aria-label'] || rest.label }
      { ...rest }
      componentType={ components.CHECKBOX }
    />
  );

const fieldMapper = type =>
  ({
    [components.TEXT_FIELD]: props => (
      <FormGroupWrapper { ...props } formField={ FinalFormField } />
    ),
    [components.SELECT_COMPONENT]: props => (
      <FormGroupWrapper
        componentType={ components.SELECT_COMPONENT }
        formField={ FinalFormField }
        { ...props }
      />
    ),
    [components.TEXTAREA_FIELD]: props => (
      <FormGroupWrapper
        componentType={ components.TEXTAREA_FIELD }
        formField={ FinalFormField }
        { ...props }
      />
    ),
    [components.CHECKBOX]: props => <CheckboxGroupField { ...props } />,
    [components.RADIO]: props => <SingleChoiceList { ...props } />,
    [components.SUB_FORM]: props => <NestedForm { ...props } />,
  }[type]);

const FormConditionWrapper = ({ condition, children }) =>
  condition ? <Condition { ...condition }>{ children }</Condition> : children;

const FieldInterface = ({
  meta,
  dataType,
  condition,
  validate,
  componentType,
  initialKey,
  ...props
}) => (
  <FormConditionWrapper condition={ condition }>
    { fieldMapper(componentType)({
      ...props,
      validate: Array.isArray(validate) ? validate : [ validate ],
      componentType,
      id: props.id || props.name,
    }) }
  </FormConditionWrapper>
);

FieldInterface.propTypes = {
  meta: PropTypes.object,
  condition: PropTypes.shape({
    when: PropTypes.string.isRequired,
    is: PropTypes.oneOfType([ PropTypes.array, PropTypes.string ]).isRequired,
  }),
  validate: PropTypes.oneOfType([ PropTypes.array, PropTypes.func ]),
  componentType: PropTypes.oneOf([
    components.RADIO,
    components.CHECKBOX,
    components.SELECT_COMPONENT,
    components.TEXTAREA_FIELD,
    components.TEXT_FIELD,
    components.SUB_FORM,
  ]).isRequired,
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  dataType: PropTypes.any,
  initialKey: PropTypes.any,
};

export const TextField = props => (
  <FieldInterface { ...props } componentType={ components.TEXT_FIELD } />
);
export const TextareaField = props => (
  <FieldInterface { ...props } componentType={ components.TEXTAREA_FIELD } />
);
export const SelectField = props => (
  <FieldInterface { ...props } componentType={ components.SELECT_COMPONENT } />
);
export const CheckboxGroup = props => (
  <FieldInterface { ...props } componentType={ components.CHECKBOX } />
);
export const SubForm = props => (
  <FieldInterface { ...props } componentType={ components.SUB_FORM } />
);
export const RadioGroup = props => (
  <FieldInterface { ...props } componentType={ components.RADIO } />
);
