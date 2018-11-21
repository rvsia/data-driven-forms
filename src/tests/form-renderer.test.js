import React from 'react';
import { shallow } from 'enzyme';
import FormRenderer from '../';
import WidgetSchema from '../demo-schemas/widget-schema';

describe('Form renderer component', () => {
  it('should mount pf3 variant of widget form', () => {
    const wrapper = shallow(<FormRenderer onSubmit={ jest.fn() } formType="pf3" schema={ WidgetSchema } />);
    expect(wrapper).toBeTruthy();
  });
  it('should mount pf4 variant of widget form', () => {
    const wrapper = shallow(<FormRenderer onSubmit={ jest.fn() } formType="pf4" schema={ WidgetSchema } />);
    expect(wrapper).toBeTruthy();
  });
});

