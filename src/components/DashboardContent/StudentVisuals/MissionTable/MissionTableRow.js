import React from 'react';
import { Table } from 'semantic-ui-react';

const MissionRow = ({name,playtime,averagePlaytime}) => {

	if (playtime > averagePlaytime) {
		// if past due date, row will be colored red
		return (
			<Table.Row>
				<Table.Cell negative>{name}</Table.Cell>
				<Table.Cell negative>{playtime}</Table.Cell>
				<Table.Cell negative>{averagePlaytime}</Table.Cell>
			</Table.Row>
		)
	}
	// else, row will be colored green
	return (
		<Table.Row>
			<Table.Cell positive>{name}</Table.Cell>
			<Table.Cell positive>{playtime}</Table.Cell>
			<Table.Cell positive>{averagePlaytime}</Table.Cell>
		</Table.Row>
	)
}

export default MissionRow;