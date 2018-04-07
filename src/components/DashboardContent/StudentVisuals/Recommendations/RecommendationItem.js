import React from "react";
import { Card, Image } from "semantic-ui-react";


const RecommendationItem = ({url, title, imgUrl, genre}) => {
	return (
		<Card>
			<Card.Content>
				<Image floated='right' size='mini' src={imgUrl} />
				<Card.Header>Based on your <b>{genre}</b> trait</Card.Header>
				<Card.Description as='a' href={url}>
					{title}
				</Card.Description>
			</Card.Content>
		</Card>
	)
}

export default RecommendationItem

    // <Item>
    //   <Item.Image size='tiny' src='/assets/images/wireframe/image.png' />

    //   <Item.Content>
    //     <Item.Header as='a'>Header</Item.Header>
    //     <Item.Meta>Description</Item.Meta>
    //     <Item.Description>
    //       <Image src='/assets/images/wireframe/short-paragraph.png' />
    //     </Item.Description>
    //     <Item.Extra>Additional Details</Item.Extra>
    //   </Item.Content>
    // </Item>