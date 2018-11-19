import React from 'react';
import { Field } from 'react-final-form';
import { Checkbox } from 'patternfly-react';
import { composeValidators } from '../helpers';
import { __ } from '../global-functions';
import ComponentType from '../renderer-context';

const MultipleChoiceList = ({ validate, ...props }) => (
  <Field { ...props } validate={ composeValidators(...(props.validate || [])) }>
    { ({ label, isRequired, helperText, meta, options, ...rest }) => {
      const { error, touched } = meta;
      const showError = touched && error;
      const groupValues = rest.input.value;
      return (
        <ComponentType.Consumer>
          { ({ commonComponents: { Col, FormGroup }}) => (
            <FormGroup validationState={ showError ? 'error' : null }>
              <Col
                md={ 12 }
                componentClass="label"
                className="control-label"
              >
                { __(label) }
              </Col>
              <Col md={ 12 }>
                { options.map(option => (
                  <Field
                    id={ `${rest.id}-${option.value}` }
                    key={ option.value }
                    { ...option }
                    name={ props.name }
                    type="checkbox"
                    render={ ({ input, meta, ...rest }) => {
                      const indexValue = groupValues.indexOf(
                        input.value
                      );
                      return (
                        <Checkbox
                          aria-label={ option['aria-label'] ||
                                                        option.label }
                          { ...input }
                          { ...rest }
                          onChange={ () =>
                            indexValue === -1
                              ? input.onChange([
                                ...groupValues,
                                input.value,
                              ])
                              : input.onChange([
                                ...groupValues.slice(
                                  0,
                                  indexValue
                                ),
                                ...groupValues.slice(
                                  indexValue +
                                                                          1
                                ),
                              ]) }
                        >
                          { rest.label }
                        </Checkbox>
                      );
                    } }
                  />
                )) }
              </Col>
            </FormGroup>
          ) }
        </ComponentType.Consumer>
      );
    } }
  </Field>
);

export default MultipleChoiceList;
