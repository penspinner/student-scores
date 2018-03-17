import React from 'react';

import { Grid } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

import {
  StudentFieldsContainer,
  StudentGradesLabelsContainer,
  StudentGradesStatsContainer,
  StudentGradesBarChartContainer,
} from './containers';

const App = () => (
  <Grid celled stretched>
    <Grid.Row stretched>
      <Grid.Column width={6} stretched>
        <StudentGradesLabelsContainer />
      </Grid.Column>

      <Grid.Column width={10}>
        <StudentFieldsContainer />
      </Grid.Column>
    </Grid.Row>

    <Grid.Row>
      <Grid.Column textAlign="center" width={5}>
        <StudentGradesStatsContainer />
      </Grid.Column>

      <Grid.Column textAlign="center" width={11}>
        <StudentGradesBarChartContainer />
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

export default App;
