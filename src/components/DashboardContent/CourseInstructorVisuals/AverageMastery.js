import React, { Component } from 'react';
import {
	Radar, 
	RadarChart, 
	PolarGrid, 
	PolarAngleAxis, 
	PolarRadiusAxis,
	ResponsiveContainer,
	Tooltip
} from 'recharts';
import DataNotFound from '../DataNotFound';



class AverageMastery extends Component {
	add(a,b){
		return a + b;
	}
	getAverage(items){
		return items.reduce(this.add, 0) / items.length;
	}

	getAverageMastery(){
		var staticDatabase = this.props.staticDatabase;
		var chartsDatabase = this.props.chartsDatabase;
		let studentIds = staticDatabase.CourseStudents[this.props.courseId];
		var studentlevelStatusList = [];
		var assignmentCompletednessList = [];
		var relativeAvgtimeList = [];
		var studentProactivenessList = [];
		var normalizedTotalplaytimeList = [];
		var dilligenceList = [];

		// Populate eloList with elo ratings of all students in the course
		studentIds.forEach(studentId => {
			studentlevelStatusList.push(chartsDatabase.Student.studentlevelStatus.data[studentId]);
			assignmentCompletednessList.push(chartsDatabase.Student.assignmentCompletedness.data[studentId]);
			relativeAvgtimeList.push(chartsDatabase.Student.relativeAvgtime.data[studentId]["self"]);
			studentProactivenessList.push(chartsDatabase.Student.studentProactiveness.data[studentId]);
			normalizedTotalplaytimeList.push(chartsDatabase.Student.normalizedTotalplaytime.data[studentId]["self"]);
			dilligenceList.push(chartsDatabase.Student.dilligence.data[studentId]);
		})

		var averageHardworking = this.getAverage(studentlevelStatusList);
		var averageDedication = this.getAverage(assignmentCompletednessList);
		var averageMastery = this.getAverage(relativeAvgtimeList);
		var averageProactive = this.getAverage(studentProactivenessList);
		var averageEffort = this.getAverage(normalizedTotalplaytimeList);
		var averageDiligence = this.getAverage(dilligenceList);

		var averages = {averageHardworking:averageHardworking,
					averageDedication:averageDedication,
					averageMastery:averageMastery,
					averageProactive:averageProactive,
					averageEffort:averageEffort,
					averageDiligence:averageDiligence}

		return averages;
	}

	render(){
		try{
			var averages = this.getAverageMastery();
			var data = [
			    { subject: 'Hardworking', A: Math.round(averages.averageHardworking*100)},
			    { subject: 'Dedication', A: Math.round(averages.averageDedication*100)},
			    { subject: 'Mastery', A: 100-Math.round(averages.averageMastery*100)},
			    { subject: 'Proactive', A: Math.round(averages.averageProactive*100)},
			    { subject: 'Effort', A: Math.round(averages.averageEffort*100)},
			    { subject: 'Diligence', A: Math.round(averages.averageEffort*100)},
			];	

			return (
				<ResponsiveContainer width="100%" height={400}>
			  	<RadarChart outerRadius={150} data={data}>
			      <Radar name="Average" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6}/>
			      <PolarGrid />
			      <Tooltip/>
			      <PolarAngleAxis dataKey="subject" />
			      <PolarRadiusAxis angle={60} domain={[0, 100]}/>
			    </RadarChart>
			  </ResponsiveContainer>
		  );
		}
		catch(e){
			return (
				<DataNotFound />
				);
		}
	}
}

export default AverageMastery;