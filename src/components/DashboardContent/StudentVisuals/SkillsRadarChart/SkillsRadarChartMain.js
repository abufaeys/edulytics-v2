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

	// Populate attributes with sum of all students in the course
	studentIds.forEach(studentId => {
		attributes[0] += (chartsDatabase.Student.studentlevelStatus.data[studentId] * 100);
		attributes[1] += (chartsDatabase.Student.assignmentCompletedness.data[studentId] * 100);
		attributes[2] += (chartsDatabase.Student.relativeAvgtime.data[studentId]["self"] * 100);
		attributes[3] += (chartsDatabase.Student.studentProactiveness.data[studentId] * 100);
		attributes[4] += (chartsDatabase.Student.normalizedTotalplaytime.data[studentId]["self"] * 100);
		attributes[5] += (chartsDatabase.Student.dilligence.data[studentId]);
	})

	for (let i=0;i<attributes.length;i++) {
		attributes[i] = Math.round(attributes[i]/studentIds.length)
	}

	return attributes;
}	

export default class SkillsRadarChartMain extends Component {

	render() {
		return (
			<div style={{width:"100%",height:"100%"}}>
				<Header as="h1" textAlign="center">Performance Chart</Header>
				<PentagonChart 
					levelStatus={this.props.chartsDatabase.Student.studentlevelStatus.data[this.props.userId]}
					completedness={this.props.chartsDatabase.Student.assignmentCompletedness.data[this.props.userId]}
					relativeAvgtime={this.props.chartsDatabase.Student.relativeAvgtime.data[this.props.userId]}
					proactiveness={this.props.chartsDatabase.Student.studentProactiveness.data[this.props.userId]}
					effort={this.props.chartsDatabase.Student.normalizedTotalplaytime.data[this.props.userId]}
					diligence={this.props.chartsDatabase.Student.dilligence.data[this.props.userId]}
					average={formatData(this.props.chartsDatabase, this.props.staticDatabase, this.props.userId)}
					studentName={this.props.userName}
				/>
			</div>
		)
	}
}