import React from 'react';
import { components } from '../constants';
import { TextField, TextareaField, SelectField, CheckboxGroup, SubForm, RadioGroup } from './form-fields';
import { renderArrayField } from '../shared-components/array-form-component';

const componentMapper = (componentType, formOptions) => ({
  [components.TEXT_FIELD]: props => <TextField { ...props } />,
  [components.TEXTAREA_FIELD]: props => <TextareaField { ...props } />,
  [components.SELECT_COMPONENT]: props => <SelectField { ...props } />,
  [components.CHECKBOX]: props => <CheckboxGroup { ...props } />,
  [components.RADIO]: props => <RadioGroup { ...props }/>,
  [components.FIELD_ARRAY]: props => renderArrayField(props, formOptions),
  [components.FIXED_LIST]: props => renderArrayField(props, { ...formOptions, hasFixedItems: true }),
  [components.SUB_FORM]: props => <SubForm key={ props.key } fieldKey={ props.key } { ...props } renderForm={ formOptions.renderForm } />,
})[componentType];

export default componentMapper;
