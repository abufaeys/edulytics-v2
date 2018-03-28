import React, { Component } from 'react';
import { Grid, Statistic, Card, Feed, Progress, Rating } from 'semantic-ui-react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

/*
  This is the main template for each of the dashboard we will do.
  This file is only to be changed if:
    - Changes are needed for the general dashboard layout

  For more info on Grids, link is here: https://react.semantic-ui.com/collections/grid#grid-example-divided-number
*/

class StudentContentMain extends Component {

  render(props){
    return (
      <Grid columns={3} doubling stackable>
        <Grid.Column>
          <Statistic label='Downloads' value='5,550' />
        </Grid.Column>
        <Grid.Column>
          <h1> Example Components </h1>
        </Grid.Column>
        <Grid.Column>
          <Card
        header={this.props.userNames["0UyuO8FU0Tc0K5H7zYfIAtNGiE52"]} //replace this with this.props.userId
        meta='Friend'
        description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
      />
        </Grid.Column>
        <Grid.Column>
          <Feed>
        <Feed.Event>
          <Feed.Content>
            <Feed.Summary>
              <Feed.User>Elliot</Feed.User> added you as a friend
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
  }
}

const mapStateToProps = state => ({
  userNames:state.firebase.staticDatabase.UserNames
})

const mapDispatchToProps = dispatch => bindActionCreators({

}, dispatch)

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(StudentContentMain)