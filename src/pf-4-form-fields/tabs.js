import React from 'react';
import PropTypes from 'prop-types';
import { Grid, GridItem } from '@patternfly/react-core';

const renderTabHeader = items => items.map(({ title, key }, index) => <GridItem span={ 12 } key={ key } eventKey={ index }>{ title }</GridItem>);
const renderTabContet = (items, formOptions) =>
  items.map(({ key, fields }, index) =>
    <GridItem span={ 12 } key={ key } eventKey={ index } >{ formOptions.renderForm(fields, formOptions) }</GridItem>
  );

const FormTabs = ({ fields, formOptions }) => (
  <Grid>
    { renderTabHeader(fields) }
    { renderTabContet(fields, formOptions) }
  </Grid>
);

FormTabs.propTypes = {
  fields: PropTypes.array.isRequired,
  formOptions: PropTypes.object.isRequired,
};

export default FormTabs;
