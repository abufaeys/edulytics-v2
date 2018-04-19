import React, { Component } from 'react';
import { Header, Dropdown, Grid, Statistic, Card } from 'semantic-ui-react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import WeakStudentMonitoringCard from './WeakStudentMonitoringCard';

import DataNotFound from '../../DataNotFound';

class WeakStudentMonitoringContainer extends Component {

	state = {
		noStudents:5,
	}

	handleDropdownChange = (event, data) =>{
		this.setState({noStudents:data.value});
	}

	render() {
		try{
			var studentRank = this.props.chartsDatabase.CourseInstructor.studentRank["data"][this.props.courseId];
			var studentNames = this.props.staticDatabase.UserNames;
			var studentRankList = [];
			for (var rank in studentRank){
				var studentName = studentNames[studentRank[rank]]["name"];
				studentRankList.push({rank:rank, id:studentRank[rank], name:studentName});
			}
			var noOptions = [];
			var i = 3
			while (i < studentRankList.length / 2){
				noOptions.push({value:i, text:"Bottom " + i});
				i += 1;
			}
			return (
				<div style={{width:"100%",height:"100%"}}>
					<Grid style={{"padding": "1em"}} doubling stackable>
						<Grid.Row columns={2}>
							<Grid.Column width={10}>
							<Header as="h1" textAlign="left">Weak Student Monitoring</Header>
							</Grid.Column>
							<Grid.Column width={6}>
							<Dropdown placeholder={"Bottom " + this.state.noStudents} 
							search fluid button inline options={noOptions} onChange={this.handleDropdownChange} style={{"align": "right"}} />
							</Grid.Column>
						</Grid.Row>
						<Grid.Row columns={5}>
							{studentRankList.slice(-this.state.noStudents).map((student, index) =>{
				                    return <Grid.Column stretched style={{"paddingBottom":"2em"}}>
				                    		<Card fluid>
				                    			<Statistic label={student.name} value={student.rank} />
				                    			<WeakStudentMonitoringCard userId = {student.id} />
				                    		</Card>
				                    		</Grid.Column>;
				                  })}
						</Grid.Row>
					</Grid>
				</div>
			)
		}
		catch(e){
			return(
				<div style={{width:"100%",height:"100%"}}>
					<Grid style={{"padding": "1em"}}>
					<Header as="h1" textAlign="left">WeakStudentMonitoring</Header>
					</Grid>
					<DataNotFound />
				</div>
				)
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
)(WeakStudentMonitoringContainer)