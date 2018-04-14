import React, { Component } from 'react';
import { List, Grid } from 'semantic-ui-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import DataNotFound from '../DataNotFound';


class VideosWatched extends Component {
	state = {
		videoName:"",
		studentsNotWatched:[]
	}
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
			var studentsNotWatched = [];
			for (var student in data.notWatchedIds){
				studentsNotWatched.push(data.notWatchedIds[student].studentName);
			}
			this.setState({videoName:data.videoName,
							studentsNotWatched:studentsNotWatched});
		}
		if (data.length >= 1){
			return (
				<ResponsiveContainer width="100%" height={450}>
				<Grid style={{"padding":"3em"}}>
				<Grid.Row style={{"paddingBottom":"0"}}>
		    	<BarChart width={600} height={300} data={data}>
			       	<CartesianGrid strokeDasharray="3 3"/>
			       	<XAxis dataKey="videoName"/>
			       	<YAxis/>
			       	<Tooltip payload={[{ name: '05-01', value: 12, unit: 'kg' }]}/>
			       	<Legend />
			       	<Bar dataKey="No. Watched" stackId="a" fill="#8884d8" onClick={handleBarClick}/>
			       	<Bar dataKey="No. Not Watched" stackId="a" fill="#82ca9d" />
		      	</BarChart>
		      	</Grid.Row>
		      	<Grid.Row>
		      	<List horizontal>
		      		<List.Item>
		      		<List.Content>
				        <List.Header>Students Not Watched</List.Header>
				        {this.state.studentsNotWatched.join(", ")}
				    </List.Content>
				    </List.Item>
				</List>
				</Grid.Row>
				</Grid>
			  </ResponsiveContainer>
		  );
		}
		else{
			return (
				<DataNotFound />
				)
		}
		
	}
}

export default VideosWatched
