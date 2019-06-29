import React, {Component} from 'react';
import {
	Text, 
	View
} from 'react-native';
import API from '../utils/api';
import Home from './screens/containers/home';
import Header from './sections/components/header';
import SuggestionList from './videos/containers/suggestion-list';
import LastMovieList from './videos/containers/last-movie-list';
import Movie from './screens/containers/movie';
import { connect } from 'react-redux';

class AppLayout extends Component {
	async componentDidMount() {

	    const lastMoviesList = await API.getLastMovies()
	    this.props.dispatch({
	      type: 'SET_LAST_MOVIE_LIST',
	      payload: {
	        lastMoviesList
	      }
	    })

	    const suggestionList = await API.getSuggestion(10)
	    this.props.dispatch({
	      type: 'SET_SUGGESTION_LIST',
	      payload: {
	        suggestionList
	      }
	    })
	}
	render() {
		if (this.props.selectedMovie) {
			return <Movie/>
		}
		return (
        	<Home>
	            <Header/>
	            <Text>Buscador</Text>
	            <LastMovieList/>
	            <SuggestionList/>
	        </Home>
		)
	}
}

function mapStateToProps(state) {
	return {
		selectedMovie: state.selectedMovie
	}
}

export default connect(mapStateToProps)(AppLayout);