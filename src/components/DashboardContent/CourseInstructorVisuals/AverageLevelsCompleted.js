import React from 'react';
import { Statistic } from 'semantic-ui-react';

/*
	This is the display component for showing the total number of levels completed for a student.
*/	

const LevelsCompleted = ({chartsDatabase, userId}) => {
	return (
		<Statistic label="Levels Completed" value={chartsDatabase.Student.levelComplete.data[userId]} />
	)
}

export default LevelsCompleted