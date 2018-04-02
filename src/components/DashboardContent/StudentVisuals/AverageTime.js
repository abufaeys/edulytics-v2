import React from 'react';
import { Statistic } from 'semantic-ui-react';

/*
	This is the display component for showing the average time taken for a student per level.
*/	

const AverageTimeTaken = ({chartsDatabase, userId}) => {
	return (
		<Statistic label="Average time taken / level" value={Math.round(chartsDatabase.Student.averagePlaytime.data[userId])} />
	)
}

export default AverageTimeTaken