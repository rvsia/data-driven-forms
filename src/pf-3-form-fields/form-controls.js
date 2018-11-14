import React from 'react';
import { ButtonGroup, Button, FormGroup } from 'patternfly-react';
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
}) => (
  <ComponentType.Consumer>
    {({ commonComponents: { Col } }) => (
      <Col xs={12}>
        <FormGroup>
          <ButtonGroup bsClass="pull-right">
            <Button bsStyle="primary" type="button" onClick={onSubmit}>{submitLabel}</Button>
            {onReset && <Button type="button" onClick={onReset}>{resetLabel}</Button>}
            {onCancel && <Button type="button" onClick={onCancel}>{cancelLabel}</Button>}
          </ButtonGroup>
        </FormGroup>
      </Col>
    )}
  </ComponentType.Consumer>
);

FormControls.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onCancel: PropTypes.func,
  onReset: PropTypes.func,
  submitLabel: PropTypes.string,
  cancelLabel: PropTypes.string,
  resetLabel: PropTypes.string,
};

FormControls.defaultProps = {
  submitLabel: __('Submit'),
  cancelLabel: __('Cancel'),
  resetLabel: __('Reset'),
};

export default FormControls;
