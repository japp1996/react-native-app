import React, { Component } from 'react';
import {FlatList,Text} from 'react-native';
import Empty from '../components/empty';
import Separator from '../components/vertical-separator';
import Suggestion from '../components/suggestion';

class LastMovieList extends Component {
	renderEmpty = () => <Empty text="No hay sugerencias"/>
	itemSeparator = () => <Separator/>
	renderItem = ({item}) => {
		return (
			<Suggestion {...item} />
		)	
	}
	keyExtractor = (item) => item.id.toString() 
	render() {
		return (
			<FlatList 
				horizontal
				keyExtractor={this.keyExtractor}
				data={this.props.list} 
				ListEmptyComponent={this.renderEmpty}
				ItemSeparatorComponent={this.itemSeparator}
				renderItem={this.renderItem} />
		)
	}
}

export default LastMovieList;