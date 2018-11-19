import React from 'react';
import PropTypes from 'prop-types';
import ComponentType from './renderer-context';
import pf3ComponentMapper from './pf-3-form-fields/component-mapper';
import pf4ComponentMapper from './pf-4-form-fields/component-mapper';

const chooseFormMapper = formType => ({
  pf3: pf3ComponentMapper,
  pf4: pf4ComponentMapper,
})[formType];

const chooseComponent = ({ formType, componentMapper, component, formOptions, componentProps }) => {
  let result = componentMapper(component, formOptions);
  if (!result) {
    result = chooseFormMapper(formType)(component, formOptions);
  }

  return result({ ...componentProps, name: componentProps.name || componentProps.key });
};

const ComponentMapper = props => (
  <ComponentType.Consumer>
    { ({ formType, componentMapper }) =>
      chooseComponent({ formType, componentMapper, ...props }) }
  </ComponentType.Consumer>
);

ComponentMapper.propTypes = {
  component: PropTypes.string.isRequired,
  formOptions: PropTypes.object.isRequired,
  componentProps: PropTypes.object.isRequired,
};

export default ComponentMapper;
