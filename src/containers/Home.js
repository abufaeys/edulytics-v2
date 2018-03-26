import React, { Component } from 'react';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Button, Header } from 'semantic-ui-react';
import {  XYPlot, XAxis, YAxis, HorizontalGridLines, VerticalGridLines, LineSeries } from "react-vis";
import {curveCatmullRom} from 'd3-shape';
import {
  increment,
  incrementAsync,
  decrement,
  decrementAsync,
  getQuote
} from '../reducers/home'


class Home extends Component {

	render() {

	  return (
	  	<div align="center">
        <XYPlot
            width={300}
            height={300}>
            <HorizontalGridLines />
            <VerticalGridLines />
            <XAxis title="X Axis" position="start"/>
            <YAxis title="Y Axis"/>
            <LineSeries
              className="first-series"
              data={[
                {x: 1, y: 3},
                {x: 2, y: 5},
                {x: 3, y: 15},
                {x: 4, y: 12}
              ]}/>
            <LineSeries
              className="second-series"
              data={null}/>
            <LineSeries
              className="third-series"
              curve={'curveMonotoneX'}
              style={{
                strokeDasharray: '2 2'
              }}
              data={[
                {x: 1, y: 10},
                {x: 2, y: 4},
                {x: 3, y: 2},
                {x: 4, y: 15}
              ]}
              strokeDasharray="7, 3"
              />
            <LineSeries
              className="fourth-series"
              curve={curveCatmullRom.alpha(0.5)}
              data={[
                {x: 1, y: 7},
                {x: 2, y: 11},
                {x: 3, y: 9},
                {x: 4, y: 2}
              ]}/>
          </XYPlot>
		    <h1>{this.props.currentActiveUser}</h1>
		    <p>Count: {this.props.count}</p>
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