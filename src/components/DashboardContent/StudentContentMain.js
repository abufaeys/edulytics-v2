import React, { Component } from 'react';
import { Grid, Statistic, Card, Loader } from 'semantic-ui-react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import ProgressChartMain from './StudentVisuals/ProgressChart/ProgressChartMain';
import StudentAverageTime from './StudentVisuals/AverageTime';
import StudentLevelsCompleted from './StudentVisuals/LevelsCompleted';
import AssignmentTracker from './StudentVisuals/AssignmentTracker/AssignmentTracker';
import SkillsRadarChartMain from './StudentVisuals/SkillsRadarChart/SkillsRadarChartMain';
import MissionTableMain from './StudentVisuals/MissionTable/MissionTableMain';

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
        {this.props.fetchStaticDatabaseStatus === "FETCHED" ?
          <h1>{this.props.staticDatabase.UserNames[this.props.userId]["name"]}</h1> :
          <Loader active inline='centered'/>
        }
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
        <Grid columns={2} doubling as={Card.Group} >
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
        </Grid>
        <Grid columns={2} doubling as={Card.Group} >
          <Card>
            {this.props.fetchChartsDatabaseStatus === "FETCHED" ?
              <SkillsRadarChartMain chartsDatabase={this.props.chartsDatabase} userId={this.props.userId} /> :
              <Loader active inline='centered'/>
            }
          </Card>
          <Card >
            {this.props.fetchChartsDatabaseStatus === "FETCHED" ?
              <MissionTableMain studentData={this.props.chartsDatabase.Student.studentlevelPlaytime.data[this.props.userId]} /> :
              <Loader active inline='centered'/>
            }
          </Card>
        </Grid>
      </div>
      )
  }
}

const mapStateToProps = state => ({
  userNames:state.firebase.staticDatabase.UserNames,
  fetchChartsDatabaseStatus: state.firebase.fetchChartsDatabaseStatus,
  fetchStaticDatabaseStatus: state.firebase.fetchStaticDatabaseStatus,
  chartsDatabase: state.firebase.chartsDatabase,
  staticDatabase: state.firebase.staticDatabase
})

const mapDispatchToProps = dispatch => bindActionCreators({

}, dispatch)

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(StudentContentMain)