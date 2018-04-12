import React, { Component } from 'react';
import PentagonChart from './PentagonChart';
import { Header } from 'semantic-ui-react';

const formatData = (chartsDatabase, staticDatabase, userId) => {
	let courses = staticDatabase.CourseStudents;
	let studentIds;
	let attributes = [0,0,0,0,0,0];

	// Find current course of student
	for (let key in courses) {
		// console.log(courses[key])
		if (courses[key].includes(userId)) {
			// Get all the students in the course
			studentIds = courses[key];
			break;
		}
	}

	let levelStatus = chartsDatabase.Student.studentlevelStatus.data[userId] ?
		chartsDatabase.Student.studentlevelStatus.data[userId] : 0

	let completedness = chartsDatabase.Student.assignmentCompletedness.data[userId] ?
		chartsDatabase.Student.assignmentCompletedness.data[userId] : 0

	let relativeAvgtime = chartsDatabase.Student.relativeAvgtime.data[userId] ?
		chartsDatabase.Student.relativeAvgtime.data[userId] : 0

	let proactiveness = chartsDatabase.Student.studentProactiveness.data[userId] ?
		chartsDatabase.Student.studentProactiveness.data[userId] : 0

	let effort = chartsDatabase.Student.normalizedTotalplaytime.data[userId] ? 
		chartsDatabase.Student.normalizedTotalplaytime.data[userId] : 0

	let diligence = chartsDatabase.Student.dilligence.data[userId] ?
		chartsDatabase.Student.dilligence.data[userId] : 0	

	// Populate attributes with sum of all students in the course
	studentIds.forEach(studentId => {
		attributes[0] += levelStatus * 100;
		attributes[1] += completedness * 100;
		attributes[2] += relativeAvgtime["self"] * 100;
		attributes[3] += proactiveness * 100;
		attributes[4] += effort["self"] * 100;
		attributes[5] += diligence;
	})

	for (let i=0;i<attributes.length;i++) {
		attributes[i] = Math.round(attributes[i]/studentIds.length)
	}

	return attributes;
}	

export default class SkillsRadarChartMain extends Component {

	render() {
		let levelStatus = this.props.chartsDatabase.Student.studentlevelStatus.data[this.props.userId] ?
			this.props.chartsDatabase.Student.studentlevelStatus.data[this.props.userId] : 0

		let completedness = this.props.chartsDatabase.Student.assignmentCompletedness.data[this.props.userId] ?
			this.props.chartsDatabase.Student.assignmentCompletedness.data[this.props.userId] : 0

		let relativeAvgtime = this.props.chartsDatabase.Student.relativeAvgtime.data[this.props.userId] ?
			this.props.chartsDatabase.Student.relativeAvgtime.data[this.props.userId] : 0

		let proactiveness = this.props.chartsDatabase.Student.studentProactiveness.data[this.props.userId] ?
			this.props.chartsDatabase.Student.studentProactiveness.data[this.props.userId] : 0

		let effort = this.props.chartsDatabase.Student.normalizedTotalplaytime.data[this.props.userId] ? 
			this.props.chartsDatabase.Student.normalizedTotalplaytime.data[this.props.userId] : 0

		let diligence = this.props.chartsDatabase.Student.dilligence.data[this.props.userId] ?
			this.props.chartsDatabase.Student.dilligence.data[this.props.userId] : 0

		return (
			<div style={{width:"100%",height:"100%"}}>
				<Header as="h1" textAlign="center">Performance Chart</Header>
				<PentagonChart 
					levelStatus={levelStatus}
					completedness={completedness}
					relativeAvgtime={relativeAvgtime}
					proactiveness={proactiveness}
					effort={effort}
					diligence={diligence}
					average={formatData(this.props.chartsDatabase, this.props.staticDatabase, this.props.userId)}
					studentName={this.props.userName}
				/>
			</div>
		)
	}
}