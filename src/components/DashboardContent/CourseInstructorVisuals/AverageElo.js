import React, {Component} from 'react';
import { Statistic } from 'semantic-ui-react';
import { getEloRating } from '../../../constants/helpers.js';

/*
	This is the display component for showing the total number of levels completed for a student.
*/	

class AverageElo extends Component{
	findAverageElo(){
		let staticDatabase = this.props.staticDatabase;
		let chartsDatabase = this.props.chartsDatabase;
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

		return meanBucketRef
	}	
	render(){
		try{
			var averageElo = this.findAverageElo();
			return (
					<Statistic label="Average Elo" value={averageElo} />
				)
			}
	    catch(e){
	    	return (
				<Statistic label="Average Elo" value="-" />
			)
	    }
		
	}
}

export default AverageElo