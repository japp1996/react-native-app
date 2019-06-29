import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TextInput
} from 'react-native';
import API from '../../../utils/api';
import {connect} from 'react-redux';

function mapStateToProps(state) {
	//debugger
	return {
		list: state.suggestionList,
	}
}

class Search extends Component {
  state = {
  	text: ''
  }
  handleSubmit = async () => {
  	this.props.dispatch({
  		type: 'SET_SUGGESTION_LIST',
		payload: {
			suggestionList: this.props.list,
			rendering: true
		}
  	})
  	console.log(this.props.list)
  	const suggestionList = await API.searchMovie(this.state.text)
    this.props.dispatch({
  		type: 'SET_SUGGESTION_LIST',
		payload: {
			suggestionList,
			rendering: false
		}
  	})
  }
  handleChangeText = (text) => {
  	this.setState({
  		text
  	})
  }
  render() {
    return (
      <TextInput 
      	placeholder="Buscar pelicula"
      	autoCorrect={false}
      	autoCapitalize="none"
      	underlineColorAndroid="blue"
      	onSubmitEditing={this.handleSubmit}
      	onChangeText={this.handleChangeText}
      	style={styles.input}
      />
    );
  }
}

const styles = StyleSheet.create({
	input: {
		padding: 15,
		fontSize: 15,
		borderWidth: 1,
		borderColor: '#eaeaea'
	}
});

export default connect(mapStateToProps)(Search);