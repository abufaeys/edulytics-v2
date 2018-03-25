import React, { Component } from 'react';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Button, Header } from 'semantic-ui-react';
import {
  increment,
  incrementAsync,
  decrement,
  decrementAsync,
  getQuote
} from '../reducers/home'

/*
  TO BE DELETED
*/
class Home extends Component {


	render() {
	  return (
	  	<div>
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

    <p><Button onClick={this.props.getQuote}>Get QOTD</Button></p>
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