import React from 'react';
import { Statistic } from 'semantic-ui-react';
import { getEloRating } from '../../../constants/helpers.js';

/*
	This is the display component for showing the Elo Rating of a student.
*/	

const EloRating = ({chartsDatabase, userId}) => {
	let attributes = [];
	chartsDatabase.Student.studentlevelStatus.data[userId] ?
		attributes.push(chartsDatabase.Student.studentlevelStatus.data[userId] * 100):
		attributes.push(0 * 100)

	chartsDatabase.Student.assignmentCompletedness.data[userId] ?
		attributes.push(chartsDatabase.Student.assignmentCompletedness.data[userId] * 100):
		attributes.push(0 * 100);

	chartsDatabase.Student.relativeAvgtime.data[userId] ? 
		attributes.push(chartsDatabase.Student.relativeAvgtime.data[userId]["self"] * 100) :
		attributes.push(0 * 100);

	chartsDatabase.Student.studentProactiveness.data[userId] ?
		attributes.push(chartsDatabase.Student.studentProactiveness.data[userId] * 100):
		attributes.push(0 * 100);

	chartsDatabase.Student.normalizedTotalplaytime.data[userId] ?
		chartsDatabase.Student.normalizedTotalplaytime.data[userId]["self"] * 100 :
		attributes.push(0 * 100);

	chartsDatabase.Student.dilligence.data[userId] ?
		attributes.push(chartsDatabase.Student.dilligence.data[userId]):
		attributes.push(0 * 100);

	const elo = getEloRating(attributes);


	return (
		<Statistic label="Elo Rating" value={elo} />
	)
}

export default EloRating