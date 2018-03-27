import React, { Component } from 'react';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Button, Header } from 'semantic-ui-react';
import {
  AreaSeries,
  Crosshair,
  XYPlot,
  XAxis,
  YAxis,
  HorizontalGridLines,
  VerticalGridLines,
  LineMarkSeries
} from 'react-vis';
import {curveCatmullRom} from 'd3-shape';
import {
  increment,
  incrementAsync,
  decrement,
  decrementAsync,
  getQuote
} from '../reducers/home'


class Home extends Component {
  state = {
    crosshairValues: []
  };

  DATA = [
    [
      {x: 1, y: 10},
      {x: 2, y: 10},
      {x: 3, y: 13},
      {x: 4, y: 7},
    ]
  ];
  onMouseLeave = () => this.setState({crosshairValues: []});

  onNearestX = (value, {index}) => {
    console.log(this.state.crosshairValues);
    this.setState({crosshairValues: [this.DATA[0][index]]});
  }

	render() {

	  return (
	  	<div align="center">
      <XYPlot
        width={300}
        height={300}
        onMouseLeave={this.onMouseLeave}>
        <XAxis/>
        <YAxis/>
        <HorizontalGridLines />
        <VerticalGridLines />
        <AreaSeries getNull={(d) => d.y !== null} onNearestX={this.onNearestX} data={this.DATA[0]} />
        <LineMarkSeries getNull={(d) => d.y !== null} data={this.DATA[1]} />
        <Crosshair
          values={this.state.crosshairValues}/>
      </XYPlot>
	  <p>
      <Button onClick={this.props.increment} disabled={this.props.isIncrementing}>Increment</Button>
      <Button onClick={this.props.incrementAsync} disabled={this.props.isIncrementing}>Increment Async</Button>
    </p>

    <p>
      <Button onClick={this.props.decrement} disabled={this.props.isDecrementing}>Decrementing</Button>
      <Button onClick={this.props.decrementAsync} disabled={this.props.isDecrementing}>Decrement Async</Button>
    </p>

    <p><Button onClick={this.props.getQuote} disabled={this.props.isFetchingQuote}>Get QOTD</Button></p>
    <Header as='h3'>Quote of the day: {this.props.quote}</Header>
		  </div>
	  )
	}
}

const mapStateToProps = state => ({
  count: state.home.count,
  isIncrementing: state.home.isIncrementing,
  isDecrementing: state.home.isDecrementing,
  currentActiveUser: state.navigation.currentActiveUser,
  quote: state.home.quote,
  isFetchingQuote: state.home.isFetchingQuote,
})

const mapDispatchToProps = dispatch => bindActionCreators({
  increment,
  incrementAsync,
  decrement,
  decrementAsync,
  getQuote,
  changePage: () => push('/about-us')
}, dispatch)

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(Home)