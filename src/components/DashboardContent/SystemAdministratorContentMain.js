import React from 'react'
import { Grid } from 'semantic-ui-react'

/*
  This is the main template for each of the dashboard we will do.
  This file is only to be changed if:
    - Changes are needed for the general dashboard layout

  For more info on Grids, link is here: https://react.semantic-ui.com/collections/grid#grid-example-divided-number
*/

const SystemAdministratorContentMain = () => (
  <Grid columns={3} doubling stackable>
      <Grid.Column>
        <h1> This is a grid </h1>
      </Grid.Column>
      <Grid.Column>
        <h1> This is a grid </h1>
      </Grid.Column>
      <Grid.Column>
        <h1> This is a grid </h1>
      </Grid.Column>
      <Grid.Column>
        <h1> This is a grid </h1>
      </Grid.Column>
      <Grid.Column>
        <h1> This is a grid </h1>
      </Grid.Column>
      <Grid.Column>
        <h1> This is a grid </h1>
      </Grid.Column>
  </Grid>
)

export default SystemAdministratorContentMain