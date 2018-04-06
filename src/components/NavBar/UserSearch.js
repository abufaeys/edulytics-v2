import React, { Component } from 'react'
import { Search, Menu } from 'semantic-ui-react'
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

/*
  This is the Dropdown Menu on the navigation bar.
  Its main purpose is to:
    - Change the state of the ActiveUser
    - Re-render the page according to the view chosen
*/

class UserSearch extends Component{
  searchList = []
  componentWillMount() {
      this.resetComponent();
    }
  componentDidUpdate(prevProps, prevState){
    if (prevProps.userNames !== this.props.userNames){
      for (var userId in this.props.userNames){
        if (this.props.userNames[userId]["userType"] === "Student"){
          for (var courseId in this.props.courseStudents){
            if (this.props.courseStudents[courseId].includes(userId)){
              var user = {};
              user.userid = userId;
              user.name = this.props.userNames[userId]["name"];
              user.type = this.props.userNames[userId]["userType"];
              user.coursename = this.props.courseList[courseId]["name"];
              user.courseid = courseId;
              this.searchList.push(user);
            }
          }
        }
        else { /* assumed to be course instructor*/
          for (var courseId in this.props.courseList){
            if (this.props.courseList[courseId]["instructorId"] === userId){
              var user = {};
              user.userid = userId;
              user.name = this.props.userNames[userId]["name"];
              user.type = this.props.userNames[userId]["userType"];
              user.coursename = this.props.courseList[courseId]["name"];
              user.courseid = courseId;
              this.searchList.push(user);
            }
        }
      }
    }
  }
}

  searchStudentFromList(searchTerm, noResults) {
    var results = [];
    var counter = 0;
    var index = 0;
    while (index < this.searchList.length && counter < noResults){
      var user = this.searchList[index];
        if (String(user.name).toUpperCase().includes(searchTerm.toUpperCase()) || String(user.coursename).toUpperCase().includes(searchTerm.toUpperCase())){
          results.push(user);
          counter++;
        }
      
      index++;
    }
    return results;
  }

  resetComponent = () => this.setState({ isLoading: false, results: [], value: '' })

  handleResultSelect = (e, { result }) => {
    this.resetComponent();
    if (result.type === "Student"){
      this.props.goToDashboard("Student", result.userid, "");
    }
    else {
      this.props.goToDashboard("CourseInstructor", result.userid, result.courseid);
    }
    
  }

  handleSearchChange = (e, { value }) => {
    this.setState({ isLoading: true, value });
    setTimeout(() => {
      if (this.state.value.length < 1) return this.resetComponent()
      this.setState({
        isLoading: false,
        results: this.searchStudentFromList(value, 5),
      })
    }, 1000);
  }

  render(){
    const { isLoading, value, results } = this.state
    const resultRenderer = ({ name, userid, type, coursename }) => 
        <div key={userid} className='content'>
          <div className='title'>{name}</div>
          {type === "Student" ? <div className='description'>{coursename}</div>
          : <div className='description'>{coursename}</div>}
        </div>
      
    return(
      <Search
        as={Menu.Item}
        loading={isLoading}
        onResultSelect={this.handleResultSelect}
        onSearchChange={this.handleSearchChange}
        results={results}
        value={value}
        resultRenderer={resultRenderer}
        style={this.props.style}
      />
      )
  }
}

const mapStateToProps = state => ({
  userNames: state.firebase.staticDatabase.UserNames,
  courseStudents: state.firebase.staticDatabase.CourseStudents,
  courseList: state.firebase.staticDatabase.CourseList,
})

const mapDispatchToProps = dispatch => bindActionCreators({
  goToDashboard: (userType, userId, courseId) => push("/" + userType + "/" + userId + "/" + courseId),
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserSearch)