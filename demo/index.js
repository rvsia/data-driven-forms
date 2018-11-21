/* eslint-disable */
import React from "react";
import ReactDOM from "react-dom";
import DemoComponent from "../src";
import WidgetSchema from '../src/demo-schemas/widget-schema';
import ArraySchema from '../src/demo-schemas/array-scehma';
import { Grid, Row } from 'patternfly-react';
import { conditionalSchema } from '../src/demo-schemas/mozilla-schemas';
import MiqSchema from '../src/demo-schemas/manage-iq-schemas/input';


const App = () => (
  <Grid>
    <Row>
      <DemoComponent formType="pf3" schema={MiqSchema} schemaType="miq" onSubmit={console.log} />
    </Row>
  </Grid>
)

ReactDOM.render(<App />, document.getElementById("index"));