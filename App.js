/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Text, View} from 'react-native';
import Home from './src/screens/containers/home';
import Header from './src/sections/components/header';
import SuggestionList from './src/videos/containers/suggestion-list';
import LastMovieList from './src/videos/containers/last-movie-list';
import Player from './src/player/containers/player';
import API from './utils/api';

type Props = {};
export default class App extends Component {
  state = {
    suggestionList: [],
    lastMovieList: [],
  }
  async componentDidMount() {
    const movies = await API.getSuggestion(10)
    const lastMovies = await API.getLastMovies()
    this.setState({
      suggestionList: movies,
      lastMovieList: lastMovies,
    })
  }
  render() {
    return (
      <Home>
        <Header/>
        
        <Player/>
        <Text>Pelicula Big Buck Bunny</Text>
        
        <Text>Buscador</Text>
        <Text>Categorias</Text>
        <LastMovieList list={this.state.lastMovieList}/>
        <SuggestionList list={this.state.suggestionList}/>
      </Home>
    );
  }
}
