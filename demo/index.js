import React from "react";
import ReactDOM from "react-dom";
import DemoComponent from "../src";
import WidgetSchema from '../src/demo-schemas/widget-schema';
import { Grid, Row } from 'patternfly-react';

const App = () => (
  <Grid>
    <Row>
      <DemoComponent schema={WidgetSchema} onSubmit={console.log} />
    </Row>
  </Grid>
)

ReactDOM.render(<App />, document.getElementById("index"));