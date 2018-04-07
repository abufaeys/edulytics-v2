import React from 'react';
import {
	AreaChart,
	CartesianGrid,
	Area,
	XAxis, 
	YAxis,  
	Tooltip, 
	ResponsiveContainer 
} from 'recharts';


const AverageTimePerLevel = (props) => {
	let courseTimings = props.chartsDatabase.CourseInstructor.averageLevel.data[props.courseId];
	var data = [];
	for (var levelName in courseTimings){
		var level = {levelName: levelName, averageTime:Math.round(courseTimings[levelName] * 100) / 100};
		data.push(level);
	}
	const compareTo = (a, b) => {
		if (a.averageTime > b.averageTime) {
			return 1
		}
		else if (a.averageTime < b.averageTime){
			return - 1
		}
		else{
			return 0
		}
	}
	data.sort(compareTo);
	return (
		<ResponsiveContainer width="100%" height={400}>
	  	<AreaChart width={730} height={250} data={data}
		  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
		  <defs>
		    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
		      <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
		      <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
		    </linearGradient>
		  </defs>
		  <XAxis dataKey="levelName" />
		  <YAxis />
		  <CartesianGrid strokeDasharray="3 3" />
		  <Tooltip />
		  <Area type="monotone" dataKey="averageTime" stroke="#8884d8" fillOpacity={0.4} fill="#82ca9d" />
		</AreaChart>
	  </ResponsiveContainer>
  );
}

export default AverageTimePerLevel
