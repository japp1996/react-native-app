import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TextInput
} from 'react-native';

class Search extends Component {
  state = {
  	text: ''
  }
  handleSubmit = () => {

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
      	onSubmitEditin={this.handleSubmit}
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


export default Search;