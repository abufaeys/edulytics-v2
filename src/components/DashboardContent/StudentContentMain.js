import React from 'react'
import { Grid, Statistic, Card, Feed, Progress, Rating } from 'semantic-ui-react'

/*
  This is the main template for each of the dashboard we will do.
  This file is only to be changed if:
    - Changes are needed for the general dashboard layout

  For more info on Grids, link is here: https://react.semantic-ui.com/collections/grid#grid-example-divided-number
*/

const StudentContentMain = () => (
  <Grid columns={3} doubling stackable>
    <Grid.Column>
      <Statistic label='Downloads' value='5,550' />
    </Grid.Column>
    <Grid.Column>
      <h1> Example Components </h1>
    </Grid.Column>
    <Grid.Column>
      <Card
    header='Elliot Baker'
    meta='Friend'
    description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
  />
    </Grid.Column>
    <Grid.Column>
      <Feed>
    <Feed.Event>
      <Feed.Content>
        <Feed.Summary>
          <Feed.User>Elliot Fu</Feed.User> added you as a friend
          <Feed.Date>1 Hour Ago</Feed.Date>
        </Feed.Summary>
        <Feed.Meta>
          <Feed.Like>
            4 Likes
          </Feed.Like>
        </Feed.Meta>
      </Feed.Content>
    </Feed.Event>
    </Feed>
    </Grid.Column>
    <Grid.Column>
      <Progress percent="80" indicating />
    </Grid.Column>
    <Grid.Column>
      <Rating icon='star' defaultRating={3} maxRating={4} />
    </Grid.Column>
  </Grid>
)

export default StudentContentMain