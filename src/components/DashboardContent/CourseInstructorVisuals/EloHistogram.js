import React, { Component } from 'react';
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
import DataNotFound from '../DataNotFound';



class EloHistogram extends Component {
	formatData(chartsDatabase, staticDatabase){
		let studentIds = staticDatabase.CourseStudents[this.props.courseId];
		let eloList = [];


		// Populate eloList with elo ratings of all students in the course
		studentIds.forEach(studentId => {
			let attributes = [];
			attributes.push(chartsDatabase.Student.studentlevelStatus.data[studentId] * 100);
			attributes.push(chartsDatabase.Student.assignmentCompletedness.data[studentId] * 100);
			attributes.push(chartsDatabase.Student.relativeAvgtime.data[studentId]["self"] * 100);
			attributes.push(chartsDatabase.Student.studentProactiveness.data[studentId] * 100);
			attributes.push(chartsDatabase.Student.normalizedTotalplaytime.data[studentId]["self"] * 100);
			attributes.push(chartsDatabase.Student.dilligence.data[studentId]);


			eloList.push(getEloRating(attributes));
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
			// console.log(bucket);
			finalData[bucket].y += 1;
			eloSum += ele;
		})	

		let mean = Math.floor(eloSum/eloList.length);
		let meanBucketRef = finalData[Math.floor((mean-LOWEST)/INTERVAL)]['x'];



		return {finalData, meanBucketRef};
	}	
	render(){
		try{
			var data = this.formatData(this.props.chartsDatabase, this.props.staticDatabase);
			return ( 
				<ResponsiveContainer width="100%" height={400}>
			    	<AreaChart width={500} height={400} data={data.finalData}
			            margin={{top: 20, right: 30, left: 0,}}>
			       <XAxis dataKey="x"/>
			       <YAxis/>
			       <CartesianGrid strokeDasharray="3 3"/>
			       <Tooltip/>
			       <Legend />
			       <Area type='monotone' dataKey="y" fill="#8884d8" name="No. of Students" />
			      </AreaChart>
				</ResponsiveContainer>
			)
		}
		catch(e){
			return(
				<DataNotFound />
				);
		}
		
	}
}

export default EloHistogram