import React, { lazy } from 'react';
import { components } from '../constants';

const renderArrayField = lazy(() => import('../shared-components/array-form-component'));
const TextField = lazy(() => import('./text-field-lazy'));
const TextareaField = lazy(() => import('./textarea-lazy'));
const CheckboxGroup = lazy(() => import('./checkbox-lazy'));
const RadioGroup = lazy(() => import('./radio-lazy'));
const SelectField = lazy(() => import('./select-field-lazy'));
const SubForm = lazy(() => import('./sub-form-lazy'));

const componentMapper = (componentType, formOptions) => ({
  [components.TEXT_FIELD]: props => <TextField { ...props } key={ props.name } />,
  [components.TEXTAREA_FIELD]: props => <TextareaField { ...props } key={ props.name } />,
  [components.SELECT_COMPONENT]: props => <SelectField { ...props } key={ props.name } />,
  [components.CHECKBOX]: props => <CheckboxGroup { ...props } key={ props.name } />,
  [components.RADIO]: props => <RadioGroup { ...props } key={ props.name } />,
  [components.FIELD_ARRAY]: props => renderArrayField(props, formOptions),
  [components.FIXED_LIST]: props => renderArrayField(props, { ...formOptions, hasFixedItems: true }),
  [components.SUB_FORM]: props =>
    <SubForm key={ props.key } fieldKey={ props.key } { ...props } renderForm={ formOptions.renderForm } />,
})[componentType];

export default componentMapper;
