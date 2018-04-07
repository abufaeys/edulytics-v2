import React, { Component } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


class VideosWatched extends Component {
	render(){
		var videos = this.props.chartsDatabase.CourseInstructor.studentNotWatch["data"][this.props.courseId];
		var data = [];
		for (var videoId in videos){
			var videoName = videos[videoId]["name"];
			var watchedIds = [];
			var notWatchedIds = [];
			for (var studentId in videos[videoId]["students"]){
				if (videos[videoId]["students"][studentId]["watched"] === true){
					watchedIds.push({studentId:studentId, studentName:videos[videoId]["students"][studentId]["name"]});
				}
				else{
					notWatchedIds.push({studentId:studentId, studentName:videos[videoId]["students"][studentId]["name"]});
				}
			}
			data.push({videoName:videoName, "No. Watched":watchedIds.length, "No. Not Watched":notWatchedIds.length, watchedIds:watchedIds, notWatchedIds:notWatchedIds});
		}

		const handleBarClick = (data, index) => {
		}

		return (
			<ResponsiveContainer width="100%" height={400}>
	    	<BarChart width={600} height={300} data={data}>
		       	<CartesianGrid strokeDasharray="3 3"/>
		       	<XAxis dataKey="videoName"/>
		       	<YAxis/>
		       	<Tooltip/>
		       	<Legend />
		       	<Bar dataKey="No. Watched" stackId="a" fill="#8884d8" onClick={handleBarClick}/>
		       	<Bar dataKey="No. Not Watched" stackId="a" fill="#82ca9d" />
	      	</BarChart>

		  </ResponsiveContainer>
	  );
	}
}

export default VideosWatched
