import React from 'react';
import { Field } from 'react-final-form';
import { composeValidators } from '../helpers';

import './array-field-style.scss';

const FormGroupWrapper = ({ validate, formField, ...props }) =>
    <Field {...props} validate={composeValidators(...validate || [])} component={formField} />

export default FormGroupWrapper;
