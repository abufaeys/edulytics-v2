import React, { Component } from 'react';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Container, Button, Header, Icon } from 'semantic-ui-react';


class Home extends Component {

	render() {

	  return (
        <Container text>
          <Header
            as='h1'
            content="Edulytics"
            style={{
              fontSize: "4em",
              fontWeight: 'normal',
              marginBottom: 0,
              marginTop: '3em',
            }}
          />
          <Header
            as='h2'
            content='Knowledge is power.'
            style={{
              fontSize: '1.7em',
              fontWeight: 'normal',
              marginTop: '1.5em',
              color:"grey",
            }}
          />
          <Button primary size='huge' onClick={this.props.changeToStudentPage}>
            Student Log In
            <Icon name='right arrow' />
          </Button>
          <Button primary size='huge' onClick={this.props.changeToCourseInstructorPage}>
            Course Instructor Log In
            <Icon name='right arrow' />
          </Button>
        </Container>
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
  changeToStudentPage: () => push('/Student/reSGNVLjpJfuiZZMdMtCudWM9Xv1'),
  changeToCourseInstructorPage: () => push('/CourseInstructor/R6nSbDVly8PUnC6jQFcseDS9sgJ3/-L5cmwU2yj2HRmfDvIUP'),
}, dispatch)

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(Home)