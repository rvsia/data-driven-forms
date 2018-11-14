import React, { Fragment, Suspense } from 'react';
import PropTypes from 'prop-types';
import { Form } from 'react-final-form';
import { Form as Pf3Form } from 'patternfly-react';
import { Form as Pf4Form } from '@patternfly/react-core';
import arrayMutators from 'final-form-arrays';
import ComponentType, { configureContext } from './renderer-context';
import FormControls from './shared-components/form-controls';
import renderForm from './render-form';

import './react-select.scss';

const formWrapperMapper = componentType => ({
  pf3: ({ children, ...props }) => <Pf3Form {...props}>{children}</Pf3Form>,
  pf4: ({ children, ...props }) => <Pf4Form {...props}>{children}</Pf4Form>,
})[componentType];

const FormRenderer = ({
  formType,
  onSubmit,
  onCancel,
  canReset,
  schema,
}) => (
  <ComponentType.Provider value={configureContext(formType)}>
    <Suspense fallback={<div>Loading...</div>}>
      <Form
        onSubmit={onSubmit}
        mutators={{ ...arrayMutators }}
        subscription={{ prisitne: true, submitting: true }}
        render={({ handleSubmit, pristine, form: { reset, mutators, change } }) => (
          formWrapperMapper(formType)({
            children: (
              <Fragment>
                <div>Form renderer of type: {formType}</div>
                {renderForm(schema.fields, { push: mutators.push, change, pristine })}
                <FormControls onSubmit={handleSubmit} onCancel={onCancel} onReset={canReset && reset} />
              </Fragment>
          ),
        })
        )}
      />
    </Suspense>
  </ComponentType.Provider>
);

FormRenderer.propTypes = {
  formType: PropTypes.oneOf(['pf3', 'pf4']),
  onSubmit: PropTypes.func.isRequired,
  onCancel: PropTypes.func,
  canReset: PropTypes.bool,
  schema: PropTypes.object.isRequired,
};

FormRenderer.defaultProps = {
  formType: 'pf3',
  resetAble: false,
};

export default FormRenderer;
