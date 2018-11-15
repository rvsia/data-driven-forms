export default {
  title: 'Widgets',
  fields: [{
    autoFocus: false,
    name: 'stringFormats',
    validate: [],
    key: 'stringFormats',
    title: 'String formats',
    component: 'sub-form',
    fields: [{
      initialKey: 'email',
      description: 'Insert your email address',
      helperText: 'must be in email format',
      validate: [{
        type: 'required-validator'
      }, {
        type: 'min-items-validator',
        treshold: 3
      }],
      name: 'stringFormats.email',
      component: 'text-field',
      type: 'email',
      label: 'email',
      dataType: 'string',
      autoFocus: false
    }, {
      name: 'stringFormats.uri',
      label: 'uri',
      initialKey: 'uri',
      component: 'text-field',
      type: 'uri',
      dataType: 'string',
      validate: [],
      autoFocus: false
    }]
  }, {
    autoFocus: false,
    name: 'boolean',
    title: 'Boolean field',
    validate: [],
    key: 'boolean',
    component: 'sub-form',
    fields: [{
      name: 'boolean.default',
      initialKey: 'default',
      title: 'checkbox (default)',
      label: 'checkbox (default)',
      validate: [],
      autoFocus: false,
      description: 'This is the checkbox-description',
      component: 'checkbox-field',
      type: 'checkbox',
      dataType: 'boolean'
    }, {
      name: 'boolean.radio',
      initialKey: 'radio',
      title: 'radio buttons',
      label: 'radio buttons',
      validate: [],
      autoFocus: false,
      description: 'This is the radio-description',
      component: 'radio-field',
      type: 'radio',
      dataType: 'boolean',
      options: [{
        label: 'Yes',
        value: true
      }, {
        label: 'No',
        value: false
      }]
    }, {
      autoFocus: false,
      name: 'boolean.select',
      initialKey: 'select',
      title: 'select box',
      label: 'select box',
      component: 'select-field',
      type: 'boolean',
      dataType: 'boolean',
      validate: [{
        type: 'required-validator'
      }],
      isRequired: true,
      description: 'This is the select-description',
      options: [{
        label: 'Please Choose'
      }, {
        value: true,
        label: 'Yes'
      }, {
        value: false,
        label: 'No'
      }]
    }]
  }, {
    autoFocus: false,
    name: 'string',
    title: 'String field',
    validate: [],
    component: 'sub-form',
    key: 'string',
    fields: [{
      autoFocus: false,
      validate: [],
      name: 'string.default',
      initialKey: 'default',
      type: 'text',
      dataType: 'string',
      component: 'text-field',
      title: 'text input (default)',
      label: 'text input (default)'
    }, {
      autoFocus: false,
      validate: [],
      name: 'string.textarea',
      initialKey: 'textarea',
      rows: 5,
      type: 'string',
      dataType: 'string',
      component: 'textarea-field',
      title: 'textarea',
      label: 'textarea'
    }, {
      autoFocus: false,
      validate: [],
      name: 'string.color',
      initialKey: 'color',
      type: 'color',
      dataType: 'string',
      component: 'text-field',
      title: 'color picker',
      label: 'color picker',
      default: '#151ce6'
    }]
  }, {
    autoFocus: false,
    name: 'secret',
    type: 'hidden',
    dataType: 'string',
    component: 'text-field',
    default: 'I\'m a hidden string.'
  }, {
    autoFocus: false,
    validate: [],
    name: 'disabled',
    type: 'text',
    dataType: 'string',
    component: 'text-field',
    title: 'A disabled field',
    label: 'A disabled field',
    default: 'I am disabled.',
    isDisabled: true
  }, {
    autoFocus: false,
    validate: [],
    name: 'readonly',
    type: 'text',
    dataType: 'string',
    component: 'text-field',
    title: 'A readonly field',
    label: 'A readonly field',
    default: 'I am read-only.',
    isReadOnly: true
  }, {
    autoFocus: false,
    validate: [],
    name: 'widgetOptions',
    type: 'text',
    dataType: 'string',
    component: 'text-field',
    title: 'Custom widget with options',
    label: 'Custom widget with options',
    default: 'I am yellow'
  }, {
    autoFocus: false,
    validate: [],
    name: 'selectWidgetOptions',
    type: 'string',
    dataType: 'string',
    component: 'select-field',
    title: 'Custom select widget with options',
    label: 'Custom select widget with options',
    options: [{
      label: 'Please Choose'
    }, {
      value: 'foo',
      label: 'Foo'
    }, {
      value: 'bar',
      label: 'Bar'
    }]
  }]
};
