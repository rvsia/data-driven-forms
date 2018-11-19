import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'react-final-form';

const Condition = ({ when, is, children }) => {
  const shouldRender = value =>
    Array.isArray(is) ? !!is.find(item => item === value) : value === is;
  return (
    <Field name={ when } subscription={{ value: true }}>
      { ({ input: { value }}) => (shouldRender(value) ? children : null) }
    </Field>
  );
};

Condition.propTypes = {
  when: PropTypes.string.isRequired,
  is: PropTypes.any,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Condition;
