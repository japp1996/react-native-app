import React, { Component } from 'react';
import {FlatList,Text} from 'react-native';

class SuggestionList extends Component {
	render() {
		const list = [
			{
				title: 'Aperturas',
				key: '1'
			},
			{
				title: 'Medio Juego',
				key: '2'
			},
			{
				title: 'Finales',
				key: '3'
			}
		]
		return (
			<FlatList data={list} renderItem={({item}) => <Text>{item.title}</Text>}/>

		)
	}
}

export default SuggestionList;