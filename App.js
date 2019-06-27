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
import API from './utils/api';
import Video from 'react-native-video';

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
        <Text>Pelicula Big Buck Bunny</Text>
        <View style={{
            flex: 1, 
            height:100
          }}>
          <Video source={{uri:'https://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4'}} 
            style={{
              position: 'absolute',
              left: 0,
              right: 0,
              bottom: 0,
              top: 0,
            }}
            resizeMode="contain"
          />
        </View>
        <Text>Buscador</Text>
        <Text>Categorias</Text>
        <LastMovieList list={this.state.lastMovieList}/>
        <SuggestionList list={this.state.suggestionList}/>
      </Home>
    );
  }
}
