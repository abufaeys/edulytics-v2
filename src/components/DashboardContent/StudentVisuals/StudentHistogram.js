import React from 'react';
import {
	AreaChart, 
	Area, 
	XAxis, 
	YAxis, 
	CartesianGrid, 
	Tooltip, 
	Legend,
	ReferenceLine,
	ResponsiveContainer
} from 'recharts';
import {
	Header
} from 'semantic-ui-react';
import { getEloRating } from '../../../constants/helpers.js';

const formatData = (chartsDatabase, staticDatabase, userId) => {
	let courses = staticDatabase.CourseStudents;
	let studentIds;
	let eloList = [];
	let userElo = 0;

	// Find current course of student
	for (let key in courses) {
		// console.log(courses[key])
		if (courses[key].includes(userId)) {
			// Get all the students in the course
			studentIds = courses[key];
			break;
		}
	}


	// Populate eloList with elo ratings of all students in the course
	studentIds.forEach(studentId => {
		let attributes = [];
		chartsDatabase.Student.studentlevelStatus.data[studentId] ?
			attributes.push(chartsDatabase.Student.studentlevelStatus.data[studentId] * 100):
			attributes.push(0 * 100)

		chartsDatabase.Student.assignmentCompletedness.data[studentId] ?
			attributes.push(chartsDatabase.Student.assignmentCompletedness.data[studentId] * 100):
			attributes.push(0 * 100);

		chartsDatabase.Student.relativeAvgtime.data[studentId] ? 
			attributes.push(chartsDatabase.Student.relativeAvgtime.data[studentId]["self"] * 100) :
			attributes.push(0 * 100);

		chartsDatabase.Student.studentProactiveness.data[studentId] ?
			attributes.push(chartsDatabase.Student.studentProactiveness.data[studentId] * 100):
			attributes.push(0 * 100);

		chartsDatabase.Student.normalizedTotalplaytime.data[studentId] ?
			chartsDatabase.Student.normalizedTotalplaytime.data[studentId]["self"] * 100 :
			attributes.push(0 * 100);

		chartsDatabase.Student.dilligence.data[studentId] ?
			attributes.push(chartsDatabase.Student.dilligence.data[studentId]):
			attributes.push(0 * 100);

		eloList.push(getEloRating(attributes));

		if (studentId === userId) {
			userElo = getEloRating(attributes);
		}
	})

	// 
	eloList.sort();
	let BUCKETS = 20;
	let LOWEST = Math.min(...eloList);
	let HIGHEST = Math.max(...eloList);
	let INTERVAL = (HIGHEST-LOWEST)/BUCKETS;
	let finalData = [];
	let eloSum = 0;
	
	for (let i=0;i<=BUCKETS;i++) {
		finalData.push({x: Math.floor(i*INTERVAL+LOWEST), y: 0,})
	}	

	eloList.forEach(ele => {
		let bucket = Math.floor((ele-LOWEST)/INTERVAL);
		finalData[bucket].y += 1;
		eloSum += ele;
	})	

	let mean = Math.floor(eloSum/eloList.length);
	let meanBucketRef = finalData[Math.floor((mean-LOWEST)/INTERVAL)]['x'];

	let userEloBucketRef = finalData[Math.floor((userElo-LOWEST)/INTERVAL)]['x'];


	return {finalData, userEloBucketRef, meanBucketRef};
}	

const StudentHistogram = ({chartsDatabase, staticDatabase, userId}) => {
	let data = formatData(chartsDatabase, staticDatabase, userId);
	return ( 
		<div>
			<Header as='h1' textAlign="center">Elo Distribution</Header>
			<ResponsiveContainer width="100%" height={300}>
	    	<AreaChart width={500} height={300} data={data.finalData}
	            margin={{top: 20, right: 30, left: 0,}}>
	       <XAxis dataKey="x"/>
	       <YAxis/>
	       <CartesianGrid strokeDasharray="3 3"/>
	       <Tooltip/>
	       <Legend />
	       <Area type='monotone' dataKey="y" fill="#8884d8" name="Occurences" />
	       <ReferenceLine x={data.meanBucketRef} label="Average" stroke="red" strokeDasharray="3 3" />
	       <ReferenceLine x={data.userEloBucketRef} label={{position: 'top',offset: -50, value: "Your Elo"}} stroke="green" strokeDasharray="3 3" />
	      </AreaChart>
     	</ResponsiveContainer>
		</div>
	)
}

export default StudentHistogram