/* eslint-disable camelcase */
import { components } from '../../constants/';

const output = {
  title: 'Testing dialog',
  description: 'Description of testing Dialog',
  fields: [
    {
      fields: [
        {
          title: 'Tab 1',
          description: 'Text boxes and text areas',
          key: '553',
          fields: [
            {
              title: 'Text boxes',
              key: '637',
              fields: [
                {
                  name: 'text_box_1',
                  label: 'Text Box',
                  title: 'Text Box',
                  dataType: null,
                  isRequired: false,
                  isVisible: true,
                  isReadOnly: false,
                  helperText: '',
                  autoFocus: false,
                  component: components.TEXT_FIELD,
                  options: [

                  ],
                },
                {
                  name: 'text_box_2',
                  label: 'Text Box with help',
                  title: 'Text Box with help',
                  dataType: null,
                  isRequired: false,
                  isVisible: true,
                  isReadOnly: false,
                  helperText: 'Helper text',
                  autoFocus: false,
                  component: components.TEXT_FIELD,
                  options: [

                  ],
                },
                {
                  name: 'text_box_3',
                  label: 'Text Box required',
                  title: 'Text Box required',
                  dataType: null,
                  isRequired: true,
                  isVisible: true,
                  isReadOnly: false,
                  helperText: '',
                  autoFocus: false,
                  component: components.TEXT_FIELD,
                  options: [

                  ],
                },
                {
                  name: 'text_box_4',
                  label: 'Text Box readonly',
                  title: 'Text Box readonly',
                  dataType: null,
                  isRequired: false,
                  isVisible: true,
                  isReadOnly: true,
                  helperText: '',
                  autoFocus: false,
                  component: components.TEXT_FIELD,
                  options: [

                  ],
                },
                {
                  name: 'text_box_5',
                  label: 'Text Box default',
                  title: 'Text Box default',
                  dataType: null,
                  isRequired: false,
                  isVisible: true,
                  isReadOnly: false,
                  helperText: '',
                  autoFocus: false,
                  component: components.TEXT_FIELD,
                  options: [

                  ],
                },
                {
                  name: 'text_box_6',
                  label: 'Text Box unvisible',
                  title: 'Text Box unvisible',
                  dataType: null,
                  isRequired: false,
                  isVisible: false,
                  isReadOnly: false,
                  helperText: '',
                  autoFocus: false,
                  component: components.TEXT_FIELD,
                  options: [

                  ],
                },
                {
                  name: 'text_box_7',
                  label: 'Text Box with validator',
                  title: 'Text Box with validator',
                  dataType: null,
                  isRequired: false,
                  isVisible: true,
                  isReadOnly: false,
                  helperText: '',
                  autoFocus: false,
                  component: components.TEXT_FIELD,
                  options: [

                  ],
                },
                {
                  name: 'text_box_8',
                  label: 'Text Box integer value',
                  title: 'Text Box integer value',
                  dataType: 'integer',
                  isRequired: false,
                  isVisible: true,
                  isReadOnly: false,
                  helperText: '',
                  autoFocus: false,
                  component: components.TEXT_FIELD,
                  options: [

                  ],
                },
                {
                  name: 'text_box_9',
                  label: 'Text Box string value',
                  title: 'Text Box string value',
                  dataType: 'string',
                  isRequired: false,
                  isVisible: true,
                  isReadOnly: false,
                  helperText: '',
                  autoFocus: false,
                  component: components.TEXT_FIELD,
                  options: [

                  ],
                },
              ],
              component: components.SUB_FORM,
            },
            {
              title: 'Text areas',
              key: '638',
              fields: [
                {
                  name: 'textarea_box_1',
                  label: 'Text Area',
                  title: 'Text Area',
                  dataType: null,
                  isRequired: false,
                  isVisible: true,
                  isReadOnly: false,
                  helperText: '',
                  autoFocus: false,
                  component: components.TEXTAREA_FIELD,
                  options: [

                  ],
                },
              ],
              component: components.SUB_FORM,
            },
          ],
          component: components.TAB_ITEM,
        },
        {
          title: 'Tab 2',
          description: 'Checks',
          key: '554',
          fields: [
            {
              title: 'Check boxes',
              key: '639',
              fields: [
                {
                  name: 'check_box_1',
                  label: 'Check Box',
                  title: 'Check Box',
                  dataType: null,
                  isRequired: false,
                  isVisible: true,
                  isReadOnly: false,
                  helperText: '',
                  autoFocus: false,
                  component: components.CHECKBOX,
                  options: [

                  ],
                },
                {
                  name: 'check_box_2',
                  label: 'Check Box checked',
                  title: 'Check Box checked',
                  dataType: null,
                  isRequired: false,
                  isVisible: true,
                  isReadOnly: false,
                  helperText: '',
                  autoFocus: false,
                  component: components.CHECKBOX,
                  options: [

                  ],
                },
              ],
              component: components.SUB_FORM,
            },
            {
              title: 'Radios',
              key: '640',
              fields: [
                {
                  name: 'radio_button_1',
                  label: 'Radio Button',
                  title: 'Radio Button',
                  dataType: 'string',
                  isRequired: false,
                  isVisible: true,
                  isReadOnly: false,
                  helperText: '',
                  autoFocus: false,
                  component: components.RADIO,
                  options: [
                    {
                      label: 'One',
                      value: '1',
                    },
                    {
                      label: 'Two',
                      value: '2',
                    },
                    {
                      label: 'Three',
                      value: '3',
                    },
                  ],
                },
                {
                  name: 'radio_button_2',
                  label: 'Radio Button sorted by',
                  title: 'Radio Button sorted by',
                  dataType: 'string',
                  isRequired: false,
                  isVisible: true,
                  isReadOnly: false,
                  helperText: '',
                  autoFocus: false,
                  component: components.RADIO,
                  options: [
                    {
                      label: 'One',
                      value: '1',
                    },
                    {
                      label: 'Two',
                      value: '2',
                    },
                    {
                      label: 'Three',
                      value: '3',
                    },
                  ],
                },
                {
                  name: 'radio_button_4',
                  label: 'Radio Button default',
                  title: 'Radio Button default',
                  dataType: 'string',
                  isRequired: false,
                  isVisible: true,
                  isReadOnly: false,
                  helperText: '',
                  autoFocus: false,
                  component: components.RADIO,
                  options: [
                    {
                      label: 'One',
                      value: '1',
                    },
                    {
                      label: 'Two',
                      value: '2',
                    },
                    {
                      label: 'Three',
                      value: '3',
                    },
                  ],
                },
              ],
              component: components.SUB_FORM,
            },
          ],
          component: components.TAB_ITEM,
        },
        {
          title: 'Tab 3',
          description: '',
          key: '555',
          fields: [
            {
              title: 'Dropdowns',
              key: '641',
              fields: [
                {
                  name: 'dropdown_list_1',
                  label: 'Dropdown',
                  title: 'Dropdown',
                  dataType: 'string',
                  isRequired: false,
                  isVisible: true,
                  isReadOnly: false,
                  helperText: '',
                  autoFocus: false,
                  component: components.SELECT_COMPONENT,
                  options: [
                    {
                      label: '<None>',
                      value: null,
                    },
                    {
                      label: 'One',
                      value: '1',
                    },
                    {
                      label: 'Three',
                      value: '3',
                    },
                    {
                      label: 'Two',
                      value: '2',
                    },
                  ],
                },
                {
                  name: 'dropdown_list_2',
                  label: 'Dropdown default value',
                  title: 'Dropdown default value',
                  dataType: 'string',
                  isRequired: false,
                  isVisible: true,
                  isReadOnly: false,
                  helperText: '',
                  autoFocus: false,
                  component: components.SELECT_COMPONENT,
                  options: [
                    {
                      label: '<None>',
                      value: null,
                    },
                    {
                      label: 'One',
                      value: '1',
                    },
                    {
                      label: 'Three',
                      value: '3',
                    },
                    {
                      label: 'Two',
                      value: '2',
                    },
                  ],
                },
                {
                  name: 'dropdown_list_3',
                  label: 'Dropdown multiselect',
                  title: 'Dropdown multiselect',
                  dataType: 'string',
                  isRequired: false,
                  isVisible: true,
                  isReadOnly: false,
                  helperText: '',
                  autoFocus: false,
                  component: components.SELECT_COMPONENT,
                  options: [
                    {
                      label: '<None>',
                      value: null,
                    },
                    {
                      label: 'One',
                      value: '1',
                    },
                    {
                      label: 'Three',
                      value: '3',
                    },
                    {
                      label: 'Two',
                      value: '2',
                    },
                  ],
                },
                {
                  name: 'dropdown_list_4',
                  label: 'Dropdown sort by value',
                  title: 'Dropdown sort by value',
                  dataType: 'string',
                  isRequired: false,
                  isVisible: true,
                  isReadOnly: false,
                  helperText: '',
                  autoFocus: false,
                  component: components.SELECT_COMPONENT,
                  options: [
                    {
                      label: '<None>',
                      value: null,
                    },
                    {
                      label: 'One',
                      value: '1',
                    },
                    {
                      label: 'Two',
                      value: '2',
                    },
                    {
                      label: 'Three',
                      value: '3',
                    },
                  ],
                },
              ],
              component: components.SUB_FORM,
            },
          ],
          component: components.TAB_ITEM,
        },
        {
          title: 'Tab 4',
          description: '',
          key: '556',
          fields: [
            {
              title: 'Datepickers',
              key: '642',
              fields: [
                {
                  name: 'date_control_1',
                  label: 'Datepicker',
                  title: 'Datepicker',
                  dataType: null,
                  isRequired: false,
                  isVisible: true,
                  isReadOnly: false,
                  helperText: '',
                  autoFocus: false,
                  component: components.DATE_PICKER,
                  options: [

                  ],
                },
                {
                  name: 'date_control_2',
                  label: 'Datepicker with past days',
                  title: 'Datepicker with past days',
                  dataType: null,
                  isRequired: false,
                  isVisible: true,
                  isReadOnly: false,
                  helperText: '',
                  autoFocus: false,
                  component: components.DATE_PICKER,
                  options: [

                  ],
                },
              ],
              component: components.SUB_FORM,
            },
            {
              title: 'Timepickers',
              key: '643',
              fields: [
                {
                  name: 'date_time_control_1',
                  label: 'Timepicker',
                  title: 'Timepicker',
                  dataType: null,
                  isRequired: false,
                  isVisible: true,
                  isReadOnly: false,
                  helperText: '',
                  autoFocus: false,
                  component: components.TIME_PICKER,
                  options: [

                  ],
                },
                {
                  name: 'date_time_control_2',
                  label: 'Timepicker with past days',
                  title: 'Timepicker with past days',
                  dataType: null,
                  isRequired: false,
                  isVisible: true,
                  isReadOnly: false,
                  helperText: '',
                  autoFocus: false,
                  component: components.TIME_PICKER,
                  options: [

                  ],
                },
              ],
              component: components.SUB_FORM,
            },
          ],
          component: components.TAB_ITEM,
        },
        {
          title: 'Tab 5',
          description: 'New tab 4',
          key: '557',
          fields: [
            {
              title: 'Tag control',
              key: '644',
              fields: [
                {
                  name: 'tag_control_1',
                  label: 'Tag Control',
                  title: 'Tag Control',
                  dataType: 'string',
                  isRequired: false,
                  isVisible: true,
                  isReadOnly: false,
                  helperText: '',
                  autoFocus: false,
                  component: components.TAG_CONTROL,
                  options: [

                  ],
                },
                {
                  name: 'tag_control_2',
                  label: 'Tag Control single value',
                  title: 'Tag Control single value',
                  dataType: 'string',
                  isRequired: false,
                  isVisible: true,
                  isReadOnly: false,
                  helperText: '',
                  autoFocus: false,
                  component: components.TAG_CONTROL,
                  options: [

                  ],
                },
                {
                  name: 'tag_control_3',
                  label: 'Tag Control category',
                  title: 'Tag Control category',
                  dataType: 'string',
                  isRequired: false,
                  isVisible: true,
                  isReadOnly: false,
                  helperText: '',
                  autoFocus: false,
                  component: components.TAG_CONTROL,
                  options: [
                    {

                    },
                    {

                    },
                    {

                    },
                    {

                    },
                  ],
                },
              ],
              component: components.SUB_FORM,
            },
          ],
          component: components.TAB_ITEM,
        },
        {
          title: 'Mixed',
          description: '',
          key: '558',
          fields: [
            {
              title: 'New Section',
              key: '645',
              fields: [
                {
                  name: 'text_box_10',
                  label: 'Text Box',
                  title: 'Text Box',
                  dataType: null,
                  isRequired: false,
                  isVisible: true,
                  isReadOnly: false,
                  helperText: '',
                  autoFocus: false,
                  component: components.TEXT_FIELD,
                  options: [

                  ],
                },
                {
                  name: 'textarea_box_2',
                  label: 'Text Area',
                  title: 'Text Area',
                  dataType: null,
                  isRequired: false,
                  isVisible: true,
                  isReadOnly: false,
                  helperText: '',
                  autoFocus: false,
                  component: components.TEXTAREA_FIELD,
                  options: [

                  ],
                },
                {
                  name: 'check_box_3',
                  label: 'Check Box',
                  title: 'Check Box',
                  dataType: null,
                  isRequired: false,
                  isVisible: true,
                  isReadOnly: false,
                  helperText: '',
                  autoFocus: false,
                  component: components.CHECKBOX,
                  options: [

                  ],
                },
                {
                  name: 'check_box_4',
                  label: 'Check Box',
                  title: 'Check Box',
                  dataType: null,
                  isRequired: false,
                  isVisible: true,
                  isReadOnly: false,
                  helperText: '',
                  autoFocus: false,
                  component: components.CHECKBOX,
                  options: [

                  ],
                },
                {
                  name: 'dropdown_list_5',
                  label: 'Dropdown',
                  title: 'Dropdown',
                  dataType: 'string',
                  isRequired: false,
                  isVisible: true,
                  isReadOnly: false,
                  helperText: '',
                  autoFocus: false,
                  component: components.SELECT_COMPONENT,
                  options: [
                    {
                      label: '<None>',
                      value: null,
                    },
                    {
                      label: 'One',
                      value: '1',
                    },
                    {
                      label: 'Three',
                      value: '3',
                    },
                    {
                      label: 'Two',
                      value: '2',
                    },
                  ],
                },
                {
                  name: 'radio_button_3',
                  label: 'Radio Button',
                  title: 'Radio Button',
                  dataType: 'string',
                  isRequired: false,
                  isVisible: true,
                  isReadOnly: false,
                  helperText: '',
                  autoFocus: false,
                  component: components.RADIO,
                  options: [
                    {
                      label: 'One',
                      value: '1',
                    },
                    {
                      label: 'Two',
                      value: '2',
                    },
                    {
                      label: 'Three',
                      value: '3',
                    },
                  ],
                },
                {
                  name: 'date_time_control_3',
                  label: 'Timepicker',
                  title: 'Timepicker',
                  dataType: null,
                  isRequired: false,
                  isVisible: true,
                  isReadOnly: false,
                  helperText: '',
                  autoFocus: false,
                  component: components.TIME_PICKER,
                  options: [

                  ],
                },
              ],
              component: components.SUB_FORM,
            },
          ],
          component: components.TAB_ITEM,
        },
      ],
      component: components.TABS,
      key: '57',
    }],
};

export const defaultValues = {
  text_box_5: '"hello"', check_box_2: 'true', radio_button_4: '2', dropdown_list_2: '2',
};

export default output;
