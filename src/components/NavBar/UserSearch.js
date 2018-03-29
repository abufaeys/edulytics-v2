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
      var user = null;
      for (var userId in this.props.userNames){
        user = {};
        user.description = userId;
        user.title = this.props.userNames[userId];
        this.searchList.push(user);
      }
    }
  }

  searchStudentFromList(searchTerm, noResults){
    var results = [];
    var counter = 0;
    var index = 0;
    while (index < this.searchList.length && counter < noResults){
      var user = this.searchList[index];
      if (user.title.toUpperCase().includes(searchTerm.toUpperCase())){
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
    this.props.goToStudentDashboard(result.description);
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

    return(
      <Search
        as={Menu.Item}
        loading={isLoading}
        onResultSelect={this.handleResultSelect}
        onSearchChange={this.handleSearchChange}
        results={results}
        value={value}
        {...this.props}
      />
      )
  }
}

const mapStateToProps = state => ({
  userNames: state.firebase.staticDatabase.UserNames,
})

const mapDispatchToProps = dispatch => bindActionCreators({
  goToStudentDashboard: (studentId) => push("/Student/" + studentId),
  goHomepage: () => push('/')
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserSearch)