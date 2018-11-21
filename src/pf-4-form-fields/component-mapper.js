import React from 'react';
import { components } from '../constants';
import { TextField, TextareaField, SelectField, CheckboxGroup, RadioGroup, SubForm } from './form-fields';
import renderArrayField from '../shared-components/array-form-component';
import FormTabs from './tabs';

const componentMapper = (componentType, formOptions) => ({
  [components.TEXT_FIELD]: props => <TextField { ...props } />,
  [components.TEXTAREA_FIELD]: props => <TextareaField { ...props } />,
  [components.SELECT_COMPONENT]: props => <SelectField { ...props } />,
  [components.CHECKBOX]: props => <CheckboxGroup { ...props } />,
  [components.RADIO]: props => <RadioGroup { ...props }/>,
  [components.FIELD_ARRAY]: props => renderArrayField(props, formOptions),
  [components.FIXED_LIST]: props => renderArrayField(props, { ...formOptions, hasFixedItems: true }),
  [components.SUB_FORM]: props => <SubForm key={ props.key } fieldKey={ props.key } { ...props } renderForm={ formOptions.renderForm } />,
  [components.TABS]: props => <FormTabs { ...props } formOptions={ formOptions }/>,
  [components.DATE_PICKER]: () => <div>Un supported date picker</div>,
  [components.TIME_PICKER]: () => <div>Un supported time picker</div>,
  [components.TAG_CONTROL]: () => <div>Un supported tag control</div>,
})[componentType];

export default componentMapper;
