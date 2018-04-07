import React from "react";
import { Card } from "semantic-ui-react";
import RecommendationItem from './RecommendationItem';

const genreList = {
	hardworking: [
  	{
  		url: "https://medium.com/hi-my-name-is-jon/do-you-have-a-protective-mindset-or-a-proactive-mindset-882ee05dc475",
  		title: "Do you have a Protective mindset, or a Proactive mindset?",
  		imgUrl: "https://image.flaticon.com/icons/svg/174/174858.svg",
  		genre: "proactive"
  	},
  	{
  		url: "https://medium.com/@The_Military_Leader/junior-leaders-success-depends-on-a-proactive-mindset-guest-post-af4bd7241d92?source=search_post",
  		title: "Junior Leaders…Success Depends on a Proactive Mindset",
  		imgUrl: "https://image.flaticon.com/icons/svg/174/174858.svg",
  		genre: "proactive"
  	},
  	{
  		url: "https://medium.com/@francescod_ales/design-tasks-for-your-time-of-day-welcome-to-inactive-active-and-proactive-time-146b00bc519a",
  		title: "3 Types of Time in your Day",
  		imgUrl: "https://cdn-images-1.medium.com/max/1600/1*EwbLXbcg9HyNYWJb6wFbCA.jpeg",
  		genre: "proactive"
  	},
  	{
  		url: "https://medium.com/invisible-illness/from-panic-to-manic-to-proactive-78e36f3ae523",
  		title: "From Panic to Manic to Proactive",
  		imgUrl: "https://image.flaticon.com/icons/svg/174/174858.svg",
  		genre: "proactive"
  	}
	], 
	dedication: [
  	{
  		url: "https://medium.com/hi-my-name-is-jon/do-you-have-a-protective-mindset-or-a-proactive-mindset-882ee05dc475",
  		title: "Do you have a Protective mindset, or a Proactive mindset?",
  		imgUrl: "https://image.flaticon.com/icons/svg/174/174858.svg",
  		genre: "proactive"
  	},
  	{
  		url: "https://medium.com/@The_Military_Leader/junior-leaders-success-depends-on-a-proactive-mindset-guest-post-af4bd7241d92?source=search_post",
  		title: "Junior Leaders…Success Depends on a Proactive Mindset",
  		imgUrl: "https://image.flaticon.com/icons/svg/174/174858.svg",
  		genre: "proactive"
  	},
  	{
  		url: "https://medium.com/@francescod_ales/design-tasks-for-your-time-of-day-welcome-to-inactive-active-and-proactive-time-146b00bc519a",
  		title: "3 Types of Time in your Day",
  		imgUrl: "https://cdn-images-1.medium.com/max/1600/1*EwbLXbcg9HyNYWJb6wFbCA.jpeg",
  		genre: "proactive"
  	},
  	{
  		url: "https://medium.com/invisible-illness/from-panic-to-manic-to-proactive-78e36f3ae523",
  		title: "From Panic to Manic to Proactive",
  		imgUrl: "https://image.flaticon.com/icons/svg/174/174858.svg",
  		genre: "proactive"
  	}
	],
  mastery: [
  	{
  		url: "https://medium.com/hi-my-name-is-jon/do-you-have-a-protective-mindset-or-a-proactive-mindset-882ee05dc475",
  		title: "Do you have a Protective mindset, or a Proactive mindset?",
  		imgUrl: "https://image.flaticon.com/icons/svg/174/174858.svg",
  		genre: "proactive"
  	},
  	{
  		url: "https://medium.com/@The_Military_Leader/junior-leaders-success-depends-on-a-proactive-mindset-guest-post-af4bd7241d92?source=search_post",
  		title: "Junior Leaders…Success Depends on a Proactive Mindset",
  		imgUrl: "https://image.flaticon.com/icons/svg/174/174858.svg",
  		genre: "proactive"
  	},
  	{
  		url: "https://medium.com/@francescod_ales/design-tasks-for-your-time-of-day-welcome-to-inactive-active-and-proactive-time-146b00bc519a",
  		title: "3 Types of Time in your Day",
  		imgUrl: "https://cdn-images-1.medium.com/max/1600/1*EwbLXbcg9HyNYWJb6wFbCA.jpeg",
  		genre: "proactive"
  	},
  	{
  		url: "https://medium.com/invisible-illness/from-panic-to-manic-to-proactive-78e36f3ae523",
  		title: "From Panic to Manic to Proactive",
  		imgUrl: "https://image.flaticon.com/icons/svg/174/174858.svg",
  		genre: "proactive"
  	}
  ],
  proactive: [
  	{
  		url: "https://medium.com/hi-my-name-is-jon/do-you-have-a-protective-mindset-or-a-proactive-mindset-882ee05dc475",
  		title: "Do you have a Protective mindset, or a Proactive mindset?",
  		imgUrl: "https://image.flaticon.com/icons/svg/174/174858.svg",
  		genre: "proactive"
  	},
  	{
  		url: "https://medium.com/@The_Military_Leader/junior-leaders-success-depends-on-a-proactive-mindset-guest-post-af4bd7241d92?source=search_post",
  		title: "Junior Leaders…Success Depends on a Proactive Mindset",
  		imgUrl: "https://image.flaticon.com/icons/svg/174/174858.svg",
  		genre: "proactive"
  	},
  	{
  		url: "https://medium.com/@francescod_ales/design-tasks-for-your-time-of-day-welcome-to-inactive-active-and-proactive-time-146b00bc519a",
  		title: "3 Types of Time in your Day",
  		imgUrl: "https://cdn-images-1.medium.com/max/1600/1*EwbLXbcg9HyNYWJb6wFbCA.jpeg",
  		genre: "proactive"
  	},
  	{
  		url: "https://medium.com/invisible-illness/from-panic-to-manic-to-proactive-78e36f3ae523",
  		title: "From Panic to Manic to Proactive",
  		imgUrl: "https://image.flaticon.com/icons/svg/174/174858.svg",
  		genre: "proactive"
  	}
  ],
  effort: [
  	{
  		url: "https://medium.com/hi-my-name-is-jon/do-you-have-a-protective-mindset-or-a-proactive-mindset-882ee05dc475",
  		title: "Do you have a Protective mindset, or a Proactive mindset?",
  		imgUrl: "https://image.flaticon.com/icons/svg/174/174858.svg",
  		genre: "proactive"
  	},
  	{
  		url: "https://medium.com/@The_Military_Leader/junior-leaders-success-depends-on-a-proactive-mindset-guest-post-af4bd7241d92?source=search_post",
  		title: "Junior Leaders…Success Depends on a Proactive Mindset",
  		imgUrl: "https://image.flaticon.com/icons/svg/174/174858.svg",
  		genre: "proactive"
  	},
  	{
  		url: "https://medium.com/@francescod_ales/design-tasks-for-your-time-of-day-welcome-to-inactive-active-and-proactive-time-146b00bc519a",
  		title: "3 Types of Time in your Day",
  		imgUrl: "https://cdn-images-1.medium.com/max/1600/1*EwbLXbcg9HyNYWJb6wFbCA.jpeg",
  		genre: "proactive"
  	},
  	{
  		url: "https://medium.com/invisible-illness/from-panic-to-manic-to-proactive-78e36f3ae523",
  		title: "From Panic to Manic to Proactive",
  		imgUrl: "https://image.flaticon.com/icons/svg/174/174858.svg",
  		genre: "proactive"
  	}
  ],
}


const processData = (chartsDatabase,userId) => {
	let output = [];
	let hardworking = chartsDatabase.Student.studentlevelStatus.data[userId];
	let dedication = chartsDatabase.Student.assignmentCompletedness.data[userId];
	let mastery = chartsDatabase.Student.relativeAvgtime.data[userId];
	let proactive = chartsDatabase.Student.studentProactiveness.data[userId];
	let effort = chartsDatabase.Student.normalizedTotalplaytime.data[userId];
	// let diligence = ... TO BE FILLED IN

	output.push(...genreList['proactive'].slice(0,(4-Math.floor(0*4))));
	output.push(...genreList['dedication'].slice(0,(4-Math.floor(0*4))))
	output.push(...genreList['hardworking'].slice(0,(4-Math.floor(0*4))))
	output.push(...genreList['mastery'].slice(0,(4-Math.floor(0*4))))
	output.push(...genreList['effort'].slice(0,(4-Math.floor(0*4))))

	return output
}

const RecommendationList = ({chartsDatabase, userId}) => {
	let data = processData(chartsDatabase,userId);

	return (
		<Card.Group itemsPerRow="1">
			{data.map(item => <RecommendationItem url={item.url} title={item.title} imgUrl={item.imgUrl} genre={item.genre} />)}
		</Card.Group>
	)

}

export default RecommendationList