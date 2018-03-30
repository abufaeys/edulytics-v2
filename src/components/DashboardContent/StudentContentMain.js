import React, { Component } from 'react';
import { Grid, Statistic, Card } from 'semantic-ui-react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import StudentHistogram from './StudentVisuals/StudentHistogram.js';

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
        <Grid columns={4} doubling as={Card.Group} >
          <Card>  
            <Statistic label='Downloads' value='5,550' />
          </Card>      
          <Card>
            <Statistic label='Downloads' value='5,550' />
          </Card>   
          <Card>
            <Statistic label='Downloads' value='5,550' />
          </Card>
          <Card>
            <Statistic label='Downloads' value='5,550' />
          </Card>           
        </Grid>
        <Grid columns={3} doubling stackable as={Card.Group} >
          <Card>
            <StudentHistogram chartsDatabase={this.props.fetchChartsDatabaseStatus === "FETCHED" ? this.props.chartsDatabase : {}}/>
          </Card>
          <Card>
            <StudentHistogram chartsDatabase={this.props.fetchChartsDatabaseStatus === "FETCHED" ? this.props.chartsDatabase : {}}/>
          </Card>
          <Card>
            <StudentHistogram chartsDatabase={this.props.fetchChartsDatabaseStatus === "FETCHED" ? this.props.chartsDatabase : {}}/>
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