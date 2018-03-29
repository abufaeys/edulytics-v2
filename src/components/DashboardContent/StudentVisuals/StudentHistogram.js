import React from 'react';
import {
	AreaChart, 
	Area, 
	XAxis, 
	YAxis, 
	CartesianGrid, 
	Tooltip, 
	Legend
} from 'recharts';
import {
	Loader
} from 'semantic-ui-react';

const formatData = (averagePlayTime) => {
	let BUCKETS = 20;
	let data = [];
	let finalData = [];
	for (let userId in averagePlayTime) {
		data.push(averagePlayTime[userId]);
	}
	data.sort();
	let LOWEST = Math.floor(Math.min(...data)/100)*100;
	let HIGHEST = Math.ceil(Math.max(...data)/100)*100;
	let INTERVAL = (HIGHEST-LOWEST)/BUCKETS

	for (let i=0;i<BUCKETS;i++) {
		finalData.push({x: i*INTERVAL, y: 0})
	}
	// console.log(finalData);
	data.forEach(ele => {
		let bucket = Math.floor(ele/INTERVAL);
		finalData[bucket].y += 1;
	})

	return finalData;
}

const StudentHistogram = ({chartsDatabase}) => {
	if (Object.getOwnPropertyNames(chartsDatabase).length === 0) {
		return(<div><Loader active inline='centered'/></div>);
	}
	let data = formatData(chartsDatabase.Student.averagePlaytime.data);
	return ( 
		<div>
    	<AreaChart width={500} height={300} data={data}
            margin={{top: 5, right: 30, left: 20, bottom: 5}}>
       <XAxis dataKey="x"/>
       <YAxis/>
       <CartesianGrid strokeDasharray="3 3"/>
       <Tooltip/>
       <Legend />
       <Area type='monotone' dataKey="y" fill="#8884d8" />
      </AreaChart>
		</div>
	)
}

export default StudentHistogram