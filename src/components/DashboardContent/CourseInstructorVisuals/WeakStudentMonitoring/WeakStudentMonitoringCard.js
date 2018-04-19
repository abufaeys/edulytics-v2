import React, {Component} from 'react';
import { Statistic } from 'semantic-ui-react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import { ResponsiveContainer } from 'recharts';

import SkillsRadarChartMin from './SkillsRadarChartMin';

import DataNotFound from '../../DataNotFound';

/*
	This is the display component for showing the total number of levels completed for a student.
*/	

class WeakStudentMonitoringCard extends Component{
	
	render(){
		try{
				return (
				<ResponsiveContainer width="100%">
					<SkillsRadarChartMin chartsDatabase={this.props.chartsDatabase} staticDatabase={this.props.staticDatabase} userId={this.props.userId} 
                  userName={this.props.userNames[this.props.userId].name}/>
                  </ResponsiveContainer>
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