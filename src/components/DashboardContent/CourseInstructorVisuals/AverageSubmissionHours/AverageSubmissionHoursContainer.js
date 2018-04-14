import React, { Component } from 'react';
import { Header, Dropdown, Grid } from 'semantic-ui-react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import AverageSubmissionHours from './AverageSubmissionHours';
import DataNotFound from '../../DataNotFound';

class AverageSubmissionHoursContainer extends Component {

	state = {
		assignmentId:"",
	}
	componentDidMount(){
		try{
			var initialAssignmentId = Object.keys(this.props.chartsDatabase.CourseInstructor.hoursAssignment["data"][this.props.courseId])[0];
			this.setState({assignmentId:initialAssignmentId});
		}
		catch(e){

		}
		
	}

	handleDropdownChange = (event, data) =>{
		this.setState({assignmentId:data.value});
	}

	render() {
		try{
			
			var assignments = this.props.chartsDatabase.CourseInstructor.hoursAssignment["data"][this.props.courseId];
			var assignmentOptions = [];
			for (var assignmentId in assignments){
				var option = {value:assignmentId, text:assignments[assignmentId]["assignmentName"]}
				assignmentOptions.push(option);
			}
			return (
				<div style={{width:"100%",height:"100%"}}>
					<Grid columns={2} style={{"padding": "1em"}}>
					<Grid.Column width={10}>
					<Header as="h1" textAlign="left">Average Assignment Submission Hours</Header>
					</Grid.Column>
					<Grid.Column width={6}>
					<Dropdown placeholder={assignments[this.state.assignmentId]["assignmentName"]} 
					search fluid button inline options={assignmentOptions} onChange={this.handleDropdownChange} style={{"align": "right"}} />
					</Grid.Column>
					</Grid>
					<AverageSubmissionHours chartsDatabase={this.props.chartsDatabase} courseId={this.props.courseId} assignmentId={this.state.assignmentId} />
				</div>
			)	
		}
		catch(e){
			return(
				<div style={{width:"100%",height:"100%"}}>
					<Grid style={{"padding": "1em"}}>
					<Header as="h1" textAlign="left">Average Assignment Submission Hours</Header>
					</Grid>
					<DataNotFound />
				</div>
				);
		}
	
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
)(AverageSubmissionHoursContainer)