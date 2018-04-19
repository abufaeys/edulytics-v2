import React, {Component} from 'react';
import { Statistic } from 'semantic-ui-react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import { ResponsiveContainer } from 'recharts';
import { getEloRating } from '../../../../constants/helpers.js';

import SkillsRadarChartMin from './SkillsRadarChartMin';

import DataNotFound from '../../DataNotFound';

/*
	This is the display component for showing the total number of levels completed for a student.
*/	

class WeakStudentMonitoringCard extends Component{
	studentElo(){
		var attributes = [];
		attributes.push(this.props.chartsDatabase.Student.studentlevelStatus.data[this.props.userId] * 100);
		attributes.push(this.props.chartsDatabase.Student.assignmentCompletedness.data[this.props.userId] * 100);
		attributes.push(this.props.chartsDatabase.Student.relativeAvgtime.data[this.props.userId]["self"] * 100);
		attributes.push(this.props.chartsDatabase.Student.studentProactiveness.data[this.props.userId] * 100);
		attributes.push(this.props.chartsDatabase.Student.normalizedTotalplaytime.data[this.props.userId]["self"] * 100);
		attributes.push(this.props.chartsDatabase.Student.dilligence.data[this.props.userId]);
		return getEloRating(attributes);
	}

	averageTimeTaken(){
		return Math.round(this.props.chartsDatabase.Student.averagePlaytime.data[this.props.userId])
	}

	levelsCompleted(){
		return this.props.chartsDatabase.Student.levelComplete.data[this.props.userId]
	}

	assignmentsDue(){
		var data = this.props.chartsDatabase.Student.assignmentsDue[this.props.userId];
		var assignments = []
		for (let course in data) {
			for (let assignment in data[course]) {
				if (data[course][assignment] !== false) {
					assignments.push(data[course][assignment]);
				}
			}
		}
		return assignments.length
	}
	
	render(){
		try{
				return (
				<div>
				<ResponsiveContainer width="100%">
					<SkillsRadarChartMin chartsDatabase={this.props.chartsDatabase} staticDatabase={this.props.staticDatabase} userId={this.props.userId} 
                  userName={this.props.userNames[this.props.userId].name}/>
                  </ResponsiveContainer>
                  <Statistic label="Elo Rating" value={this.studentElo()} horizontal />
                  <Statistic label="Levels Completed" value={this.levelsCompleted()} horizontal />
                  <Statistic label="Average Time Taken" value={this.averageTimeTaken()} horizontal />
                  <Statistic label="Assignments Due" value={this.assignmentsDue()} horizontal />
                  </div>
				)
		}
		catch(e){
			return (
			<DataNotFound />
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
	goToDashboard: (userType, userId, courseId) => push("/" + userType + "/" + userId + "/" + courseId),
}, dispatch)

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(WeakStudentMonitoringCard)