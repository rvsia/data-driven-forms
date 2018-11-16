/* eslint-disable */
import React from "react";
import ReactDOM from "react-dom";
import DemoComponent from "../src";
import WidgetSchema from '../src/demo-schemas/widget-schema';
import ArraySchema from '../src/demo-schemas/array-scehma';
import { Grid, Row } from 'patternfly-react';

const App = () => (
  <Grid>
    <Row>
      <DemoComponent formType="pf3" schema={WidgetSchema} onSubmit={console.log} />
    </Row>
  </Grid>
)

ReactDOM.render(<App />, document.getElementById("index"));