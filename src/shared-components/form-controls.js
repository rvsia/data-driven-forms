/**
 * Patternfly non dependend
 */
import React from 'react';
import PropTypes from 'prop-types';
import { __ } from '../global-functions';
import ComponentType from '../renderer-context';

const FormControls = ({
  onSubmit,
  onCancel,
  onReset,
  submitLabel,
  cancelLabel,
  resetLabel,
  pristine,
  canReset,
  canSubmit,
}) => (
  <ComponentType.Consumer>
    { ({ commonComponents: { Col, FormGroup, Button, ButtonGroup }}) => (
      <Col xs={ 12 }>
        <FormGroup>
          <ButtonGroup bsClass="pull-right">
            <Button bsStyle="primary" type="button" disabled={ !canSubmit } onClick={ onSubmit }>{ submitLabel }</Button>
            { canReset && <Button type="button" disabled={ pristine } onClick={ onReset }>{ resetLabel }</Button> }
            { onCancel && <Button type="button" onClick={ onCancel }>{ cancelLabel }</Button> }
          </ButtonGroup>
        </FormGroup>
      </Col>
    ) }
  </ComponentType.Consumer>
);

FormControls.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onCancel: PropTypes.func,
  onReset: PropTypes.func,
  submitLabel: PropTypes.string,
  cancelLabel: PropTypes.string,
  resetLabel: PropTypes.string,
  pristine: PropTypes.bool,
  canReset: PropTypes.bool,
  canSubmit: PropTypes.bool,
};

FormControls.defaultProps = {
  submitLabel: __('Submit'),
  cancelLabel: __('Cancel'),
  resetLabel: __('Reset'),
  canReset: false,
  canSubmit: false,
};

export default FormControls;
