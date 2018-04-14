import React, {Component} from 'react';
import { Statistic } from 'semantic-ui-react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import DataNotFound from '../DataNotFound';

/*
	This is the display component for showing the total number of levels completed for a student.
*/	

class Leaderboard extends Component{
	
	render(){
		try{
			var studentRank = this.props.chartsDatabase.CourseInstructor.studentRank["data"][this.props.courseId];
			var studentNames = this.props.staticDatabase.UserNames;
			var studentRankList = [];
			for (var rank in studentRank){
				var studentName = studentNames[studentRank[rank]]["name"];
				studentRankList.push({rank:rank, id:studentRank[rank], name:studentName});
			}
			if (studentRankList.length >= 1){
				return (
					<Statistic.Group horizontal>
						{studentRankList.slice(0,10).map((student, index) =>{
		                    return <Statistic size="mini" style={{padding:"0"}}>
								      <Statistic.Value>{student.rank}</Statistic.Value>
								      <Statistic.Label onClick={() => {this.props.goToDashboard("Student", student.id, "")}} style={{cursor:"pointer"}}>{student.name}</Statistic.Label>
								    </Statistic>;
		                  })}
					 </Statistic.Group>
				)
			}
			else{
				return (
					<DataNotFound />
					);
			}
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
)(Leaderboard)