import React from 'react';
import { Field } from 'react-final-form';
import { FormGroup, Checkbox, GridItem } from '@patternfly/react-core';
import { composeValidators } from '../helpers';

const MultipleChoiceList = ({ validate, ...props }) => <Field { ...props } validate={ composeValidators(...props.validate || []) }>
{ ({ label, isRequired, helperText, meta, options, ...rest }) => {
    const { error, touched } = meta;
    const showError = touched && error;
    const groupValues = rest.input.value;
    return (
      <GridItem span={12}>
        <FormGroup
            label={ label }
            isRequired={ isRequired }
            fieldId={ rest.id }
            helperText={ helperText }
            helperTextInvalid= { meta.error }
            isValid={ !showError }
        >
            { options.map(option =>
                <Field
                    id={ `${rest.id}-${option.value}` }
                    key={ option.value }
                    { ...option }
                    name={ props.name }
                    type="checkbox"
                    render={ ({ input, meta, ...rest }) => {
                        const indexValue = groupValues.indexOf(input.value);
                        return (
                            <Checkbox
                                aria-label={ option['aria-label'] || option.label }
                                { ...input }
                                { ...rest }
                                onChange={ () => indexValue === -1
                                    ? input.onChange([ ...groupValues, input.value ])
                                    : input.onChange([ ...groupValues.slice(0, indexValue), ...groupValues.slice(indexValue + 1) ]) }
                            />
                        );} } />) }
        </FormGroup>
      </GridItem>
    );
} }
</Field>;

export default MultipleChoiceList;
