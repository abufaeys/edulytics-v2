import React from 'react';
import { Card, Image } from 'semantic-ui-react'

const ProfileCard = ({name, photoUrl}) => {

	return (
		<Card>
			<Card.Content>
				<Image floated='right' size='mini' src={photoUrl} />
	      <Card.Header>
	        {name}
	      </Card.Header>		
	      <Card.Meta>
	      	Student
	      </Card.Meta>	
			</Card.Content>
		</Card>
	)
}

export default ProfileCard;