import React from 'react';
import PropTypes from 'prop-types';
import ComponentType from './renderer-context';
import pf3ComponentMapper from './pf-3-form-fields/component-mapper';
import pf4ComponentMapper from './pf-4-form-fields/component-mapper';

const chooseFormMapper = formType => ({
  pf3: pf3ComponentMapper,
  pf4: pf4ComponentMapper
})[formType];

const ComponentMapper = ({ component, formOptions, componentProps }) => (
  <ComponentType.Consumer>
    { ({ formType }) => chooseFormMapper(formType)(component, formOptions)({ ...componentProps, name: componentProps.name || componentProps.key }) }
  </ComponentType.Consumer>
);

ComponentMapper.propTypes = {
  component: PropTypes.string.isRequired,
  formOptions: PropTypes.object.isRequired,
  componentProps: PropTypes.object.isRequired
};

export default ComponentMapper;
