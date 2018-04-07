import React from "react";
import { Card } from "semantic-ui-react";
import RecommendationItem from './RecommendationItem';

const genreList = {
	hardworking: [
  	{
  		url: "https://medium.com/help-scout/how-music-affects-your-productivity-42a6dfa6fdfe",
  		title: "How Music Affects Your Productivity",
  		imgUrl: "https://cdn-images-1.medium.com/max/2000/1*tD26eDkZnfmf33oA7X1PvA.png",
  		genre: "hardworking"
  	},
  	{
  		url: "https://medium.com/personal-growth/smartphones-harm-your-productivity-more-than-you-think-62e105655992",
  		title: "Smartphones Harm Your Productivity More Than You Think",
  		imgUrl: "https://cdn-images-1.medium.com/max/1600/1*GEXZWgCOK99JRDpxAmaQAA.png",
  		genre: "hardworking"
  	},
  	{
  		url: "https://medium.com/the-mission/how-to-transform-your-stress-into-insane-productivity-according-to-harvard-psychologists-28f95074ce21",
  		title: "How to Transform Your Stress Into Insane Productivity, According to Harvard Psychologists",
  		imgUrl: "https://cdn-images-1.medium.com/max/1600/1*WHsS88_D5RYVlYc5VUvNbQ.jpeg",
  		genre: "hardworking"
  	},
  	{
  		url: "https://medium.com/swlh/the-methods-for-superhuman-productivity-de4452af7cfb",
  		title: "The Methods for SuperHuman Productivity",
  		imgUrl: "https://cdn-images-1.medium.com/fit/t/1600/480/1*aUVAQHwAwNWvULpFArDZkQ.jpeg",
  		genre: "hardworking"
  	}
	], 
	dedication: [
  	{
  		url: "https://medium.com/personal-growth/why-treating-success-like-failure-is-the-key-to-winning-in-life-8ee4f8ee0c87",
  		title: "How To Treat Both Failure & Success For True Perseverance",
  		imgUrl: "https://cdn-images-1.medium.com/max/1600/1*_CLrLmJUtZf1qHUcfmJnfA.png",
  		genre: "dedication"
  	},
  	{
  		url: "https://medium.com/this-is-eternity/i-believe-in-the-power-of-possibility-and-the-promise-in-perseverance-ceed35a914f5",
  		title: "I Believe in the Power of Possibility and the Promise in Perseverance",
  		imgUrl: "https://cdn-images-1.medium.com/max/2000/1*-EMXtZaYGc4Ms5H5zY_bfg.png",
  		genre: "dedication"
  	},
  	{
  		url: "https://medium.com/business-startup-development-and-more/what-makes-a-successful-entrepreneur-circumstance-genetics-and-perseverance-399905cf14a3",
  		title: "What Makes a Successful Entrepreneur? Circumstance, Genetics, and Perseverance",
  		imgUrl: "https://cdn-images-1.medium.com/fit/t/1600/480/1*cIweSfQvNx7wQ5y5Qr0IeQ.jpeg",
  		genre: "dedication"
  	},
  	{
  		url: "https://medium.com/humans-create-software/top-8-developer-habits-8-perseverance-813333142894",
  		title: "Top 8 developer habits: #8 Perseverance",
  		imgUrl: "https://cdn-images-1.medium.com/max/1600/1*bCxqBDDEMXUW7rfp6D9CCw.jpeg",
  		genre: "dedication"
  	}
	],
  mastery: [
  	{
  		url: "https://medium.freecodecamp.org/learning-python-from-zero-to-hero-120ea540b567",
  		title: "Learning Python: From Zero to Hero",
  		imgUrl: "https://cdn-images-1.medium.com/max/2000/1*ueWmI48uuShON-hX7LwI0w.png",
  		genre: "mastery"
  	},
  	{
  		url: "https://medium.com/personal-growth/the-secret-algorithm-behind-learning-7c6f4eb702df",
  		title: "The Secret Algorithm Behind Learning",
  		imgUrl: "https://image.flaticon.com/icons/svg/174/174858.svg",
  		genre: "mastery"
  	},
  	{
  		url: "https://medium.com/@anthony_moore/mastery-only-takes-as-long-as-you-want-it-to-take-172a3ecaec3",
  		title: "Mastery Only Takes As Long As You Want It To Take",
  		imgUrl: "https://cdn-images-1.medium.com/max/2000/1*nALI5yyNzaklcwYjQ3iuMw.jpeg",
  		genre: "mastery"
  	},
  	{
  		url: "https://medium.com/invisible-illness/from-panic-to-manic-to-proactive-78e36f3ae523",
  		title: "From Panic to Manic to Proactive",
  		imgUrl: "https://image.flaticon.com/icons/svg/174/174858.svg",
  		genre: "mastery"
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
  		url: "https://medium.com/the-mission/what-is-the-algorithm-for-success-8d820ce167b0",
  		title: "What is the algorithm for success?",
  		imgUrl: "https://cdn-images-1.medium.com/max/2000/1*nUZTZdDBKuci35Ss42bhbQ.jpeg",
  		genre: "effort"
  	},
  	{
  		url: "https://medium.com/javascript-scene/learn-to-code-13-tips-that-could-save-you-years-of-effort-92ce799a3e1f",
  		title: "Learn to Code: 13 Tips that Could Save You Years of Effort",
  		imgUrl: "https://cdn-images-1.medium.com/max/2000/1*ucMd7l6fXggw2PZ2g1KTCg.jpeg",
  		genre: "effort"
  	},
  	{
  		url: "https://medium.com/the-mission/genius-takes-time-746de0ce2ec9",
  		title: "Genius Takes Time And Extraordinary Effort",
  		imgUrl: "https://cdn-images-1.medium.com/max/2000/1*nrXkn4rKlUsy_6zAMRdijw.jpeg",
  		genre: "effort"
  	},
  	{
  		url: "https://medium.com/invisible-illness/from-panic-to-manic-to-proactive-78e36f3ae523",
  		title: "From Panic to Manic to Proactive",
  		imgUrl: "https://image.flaticon.com/icons/svg/174/174858.svg",
  		genre: "effort"
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

	output.push(...genreList['proactive'].slice(0,(4-Math.floor(proactive*4))));
	output.push(...genreList['dedication'].slice(0,(4-Math.floor(dedication*4))))
	output.push(...genreList['hardworking'].slice(0,(4-Math.floor(hardworking*4))))
	output.push(...genreList['mastery'].slice(0,(4-Math.floor(mastery*4))))
	output.push(...genreList['effort'].slice(0,(4-Math.floor(effort*4))))

	return output
}

const RecommendationList = ({chartsDatabase, userId}) => {
	let data = processData(chartsDatabase,userId);

	return (
    <div>
  		<Card.Group itemsPerRow="1">
  			{data.map(item => <RecommendationItem url={item.url} title={item.title} imgUrl={item.imgUrl} genre={item.genre} />)}
  		</Card.Group>
    </div>
	)

}

export default RecommendationList