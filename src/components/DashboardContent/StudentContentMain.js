import React, { Component } from 'react';
import { Grid, Statistic, Card, Loader } from 'semantic-ui-react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import ProgressChartMain from './StudentVisuals/ProgressChart/ProgressChartMain';
import StudentAverageTime from './StudentVisuals/AverageTime';
import StudentLevelsCompleted from './StudentVisuals/LevelsCompleted';
import AssignmentTracker from './StudentVisuals/AssignmentTracker/AssignmentTracker';

/*
  This is the main template for each of the dashboard we will do.
  This file is only to be changed if:
    - Changes are needed for the general dashboard layout

  For more info on Grids, link is here: https://react.semantic-ui.com/collections/grid#grid-example-divided-number
*/

class StudentContentMain extends Component {

  render(){

    return (
      <div style={{"backgroundColor": "#F2F2F2"}}>
        <Grid columns={3} doubling as={Card.Group} >
          <Card>  
            <Statistic label='Elo Rating' value='5,550' />
          </Card>      
          <Card>
            {this.props.fetchChartsDatabaseStatus === "FETCHED" ?
              <StudentAverageTime chartsDatabase={this.props.chartsDatabase} userId={this.props.userId} /> :
              <Loader active inline='centered'/>
            }
          </Card>   
          <Card>
            {this.props.fetchChartsDatabaseStatus === "FETCHED" ?
              <StudentLevelsCompleted chartsDatabase={this.props.chartsDatabase} userId={this.props.userId} /> :
              <Loader active inline='centered'/>
            }
          </Card>           
        </Grid>
        <Grid columns={2} doubling stackable as={Card.Group} >
          <Card>
            {this.props.fetchChartsDatabaseStatus === "FETCHED" ?
              <ProgressChartMain chartsDatabase={this.props.chartsDatabase} userId={this.props.userId}/> :
              <Loader active inline='centered'/>
            }
          </Card>
          <Card>
            {this.props.fetchChartsDatabaseStatus === "FETCHED" ?
              <AssignmentTracker chartsDatabase={this.props.chartsDatabase} userId={this.props.userId} /> :
              <Loader active inline='centered'/>
            }
          </Card>
          <Grid.Column>
            <Card
              header={this.props.fetchChartsDatabaseStatus === "FETCHED" ? this.props.userNames[this.props.userId] : "loading"}
              meta='Friend'
              description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
            />
          </Grid.Column>
        </Grid>
      </div>
      )
  }
}

const mapStateToProps = state => ({
  userNames:state.firebase.staticDatabase.UserNames,
  fetchChartsDatabaseStatus: state.firebase.fetchChartsDatabaseStatus,
  chartsDatabase: state.firebase.chartsDatabase,
})

const mapDispatchToProps = dispatch => bindActionCreators({

}, dispatch)

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(StudentContentMain)