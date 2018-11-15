/**
 * Patternfly non dependend
 */

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import ComponentType from '../renderer-context';

const SubForm = ({
  renderForm,
  fields,
  title,
  description,
}) => (
  <ComponentType.Consumer>
    {({ commonComponents: { Col } }) => (
      <Col xs={12}>
        { title && <h3>{ title }</h3> }
        { description && <p>{ description }</p> }
        { renderForm(fields) }
      </Col>
    )}
  </ComponentType.Consumer>
);

SubForm.propTypes = {
  renderForm: PropTypes.func.isRequired,
  fields: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
  ]).isRequired,
  title: PropTypes.string,
  description: PropTypes.string,
};

export default SubForm;
