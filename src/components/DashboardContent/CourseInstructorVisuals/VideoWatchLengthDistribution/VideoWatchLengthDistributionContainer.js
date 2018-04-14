import React, { Component } from 'react';
import { Header, Dropdown, Grid } from 'semantic-ui-react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import VideoWatchLengthDistribution from './VideoWatchLengthDistribution';
import DataNotFound from '../../DataNotFound';

class VideoWatchLengthDistributionContainer extends Component {

	state = {
		videoId:this.props.initialVideoId,
	}

	componentDidMount(){
		var initialVideoId = Object.keys(this.props.chartsDatabase.CourseInstructor.videoPlayTime["data"][this.props.courseId])[0];
		this.setState({videoId:initialVideoId});
	}

	handleDropdownChange = (event, data) =>{
		this.setState({videoId:data.value});
	}

	render() {
		try{
			
			var videos = this.props.chartsDatabase.CourseInstructor.videoPlayTime["data"][this.props.courseId];
			var videoOptions = [];
			for (var videoId in videos){
				var option = {value:videoId, text:videos[videoId]['name']}
				videoOptions.push(option);
			}
			return (
				<div style={{width:"100%",height:"100%"}}>
					<Grid columns={2} style={{"padding": "1em"}}>
					<Grid.Column width={10}>
					<Header as="h1" textAlign="left">Watch Length Distribution</Header>
					</Grid.Column>
					<Grid.Column width={6}>
					<Dropdown placeholder={videos[this.state.videoId]['name']} 
					search fluid button inline options={videoOptions} onChange={this.handleDropdownChange} style={{"align": "right"}} />
					</Grid.Column>
					</Grid>
					<VideoWatchLengthDistribution chartsDatabase={this.props.chartsDatabase} courseId={this.props.courseId} videoId={this.state.videoId} />
				</div>
			)
		}
		catch(e){
			return(
				<DataNotFound />
				)
		}
		
	}
}

const mapStateToProps = state => ({
  userNames:state.firebase.staticDatabase.UserNames,
  fetchChartsDatabaseStatus: state.firebase.fetchChartsDatabaseStatus,
  fetchStaticDatabaseStatus: state.firebase.fetchStaticDatabaseStatus,
  chartsDatabase: state.firebase.chartsDatabase,
  staticDatabase: state.firebase.staticDatabase
})

const mapDispatchToProps = dispatch => bindActionCreators({
}, dispatch)

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(VideoWatchLengthDistributionContainer)