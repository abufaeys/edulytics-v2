import React, { Component } from 'react';
import {
	LineChart,
	Line,
	CartesianGrid,
	Legend,
	XAxis, 
	YAxis,  
	Tooltip, 
	ResponsiveContainer 
} from 'recharts';


class VideoWatchLengthDistribution extends Component {
	render(){
		var students = this.props.chartsDatabase.CourseInstructor.videoPlayTime['data'][this.props.courseId][this.props.videoId]['students'];
		var data = [];
		for (var studentId in students){
			if (students[studentId].timeSpent !== undefined){
				var level = {name: students[studentId].name, timeSpent:students[studentId].timeSpent};
			}
			else{
				var level = {name: students[studentId].name, timeSpent:0};
			}
			data.push(level);
		}
		const compareTo = (a, b) => {
			if (a.timeSpent > b.timeSpent) {
				return 1
			}
			else if (a.timeSpent < b.timeSpent){
				return - 1
			}
			else{
				return 0
			}
		}
		data.sort(compareTo);
		return (
			<ResponsiveContainer width="100%" height={350}>
			<LineChart width={730} height={250} data={data}
			  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
			  <CartesianGrid strokeDasharray="3 3" />
			  <XAxis dataKey="name" />
			  <YAxis />
			  <Tooltip />
			  <Legend />
			  <Line type="monotone" dataKey="timeSpent" stroke="#8884d8" />
			</LineChart>
		  </ResponsiveContainer>
	  );
	}
}

export default VideoWatchLengthDistribution
