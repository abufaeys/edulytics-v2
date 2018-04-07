import React, { Component } from 'react';
import { Grid, Statistic, Card, Loader, Header } from 'semantic-ui-react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import TotalStudents from './CourseInstructorVisuals/TotalStudents';
import Leaderboard from './CourseInstructorVisuals/Leaderboard'
import AverageLevelsCompleted from './CourseInstructorVisuals/AverageLevelsCompleted';
import AverageTimePerLevel from './CourseInstructorVisuals/AverageTimePerLevel';
import SubmissionByHour from './CourseInstructorVisuals/SubmissionByHour';
import AverageSubmissionHoursContainer from './CourseInstructorVisuals/AverageSubmissionHours/AverageSubmissionHoursContainer';
import VideosWatched from './CourseInstructorVisuals/VideosWatched';
/*
  This is the main template for each of the dashboard we will do.
  This file is only to be changed if:
    - Changes are needed for the general dashboard layout

  For more info on Grids, link is here: https://react.semantic-ui.com/collections/grid#grid-example-divided-number
*/

class CourseInstructorContentMain extends Component {
  render(){
    return (
      <div style={{"backgroundColor": "#F2F2F2", "padding": "3em"}}>
        <Grid columns={3} doubling as={Card.Group} >
          <Grid.Column width={8}>
            <Card fluid>  
            {this.props.courseId !== undefined && this.props.fetchStaticDatabaseStatus === "FETCHED" ?
              <Statistic label={this.props.staticDatabase.CourseList[this.props.courseId]["instructorName"]} 
              value={this.props.staticDatabase.CourseList[this.props.courseId]["name"]} />:
              <Loader active inline='centered'/>
            }
            </Card>
          </Grid.Column>
          <Grid.Column width={4}>
            <Card fluid>
              {this.props.fetchChartsDatabaseStatus === "FETCHED" ?
                <TotalStudents staticDatabase = {this.props.staticDatabase} chartsDatabase={this.props.chartsDatabase} userId={this.props.userId} courseId={this.props.courseId}/> :
                <Loader active inline='centered'/>
              }
            </Card>
          </Grid.Column>
          <Grid.Column width={4}>
            <Card fluid>
              {this.props.fetchChartsDatabaseStatus === "FETCHED" ?
                <AverageLevelsCompleted staticDatabase={this.props.staticDatabase} chartsDatabase={this.props.chartsDatabase} userId = {this.props.userId} courseId={this.props.courseId}/> :
                <Loader active inline='centered'/>
              }
            </Card>
          </Grid.Column>       
        </Grid>
        <Grid columns={2} doubling stackable as={Card.Group}>
          <Grid.Row>
            <Grid.Column width={13}>
              <Grid.Row style={{"paddingBottom":"1.5em"}}>
                <Card fluid>
                  {this.props.fetchChartsDatabaseStatus === "FETCHED" ?
                    <div>
                    <Header as="h1" textAlign="center">Average Time Taken Per Level</Header>
                    <AverageTimePerLevel chartsDatabase={this.props.chartsDatabase} userId={this.props.userId} courseId={this.props.courseId} />
                    </div> :
                    <Loader active inline='centered'/>
                  }
                </Card>
              </Grid.Row>
              <Grid.Row style={{"padding":"0em"}}>
                <Card fluid>
                  {this.props.fetchChartsDatabaseStatus === "FETCHED" ?
                    <AverageSubmissionHoursContainer courseId={this.props.courseId}
                    initialAssignmentId={Object.keys(this.props.chartsDatabase.CourseInstructor.hoursAssignment["data"][this.props.courseId])[0]}/> :
                    <Loader active inline='centered'/>
                  }
                </Card>
              </Grid.Row>
            </Grid.Column>
            <Grid.Column width={3} stretched>
              <Card fluid>
                {this.props.fetchChartsDatabaseStatus === "FETCHED" ?
                  <div style={{"padding":"1em"}}>
                  <Header as="h1" textAlign="center">Leaderboard</Header>
                  <Leaderboard courseId = {this.props.courseId} />
                  </div> :
                  <Loader active inline='centered'/>
                }
              </Card>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Grid columns={2} as={Card.Group}>
          <Card fluid>
            {this.props.fetchChartsDatabaseStatus === "FETCHED" ?
              <div>
              <Header as="h1" textAlign="center">Watch Completion Per Video Assignment</Header>
              <VideosWatched chartsDatabase={this.props.chartsDatabase} courseId={this.props.courseId} />
              </div> :
              <Loader active inline='centered'/>
            }
          </Card>
          <Card fluid>
            {this.props.fetchChartsDatabaseStatus === "FETCHED" ?
              <div>
              <Header as="h1" textAlign="center">Average Submission Times By Hour</Header>
              <SubmissionByHour chartsDatabase={this.props.chartsDatabase} courseId={this.props.courseId} />
              </div> :
              <Loader active inline='centered'/>
            }
          </Card>
        </Grid>
        <Grid columns={1} as={Card.Group}>
          <Card fluid>
            {this.props.fetchChartsDatabaseStatus === "FETCHED" ?
              <div>
              <Header as="h1" textAlign="center">Average Submission Times By Hour</Header>
              <SubmissionByHour chartsDatabase={this.props.chartsDatabase} courseId={this.props.courseId} />
              </div> :
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
)(CourseInstructorContentMain)