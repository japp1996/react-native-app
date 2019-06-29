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
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store';

type Props = {};
export default class App extends Component {
  state = {
    /*suggestionList: [],
    lastMovieList: [],*/
  }
  async componentDidMount() {
    const lastMoviesList = await API.getLastMovies()
    store.dispatch({
      type: 'SET_LAST_MOVIE_LIST',
      payload: {
        lastMoviesList
      }
    })

    const suggestionList = await API.getSuggestion(10)
    store.dispatch({
      type: 'SET_SUGGESTION_LIST',
      payload: {
        suggestionList
      }
    })


  }
  render() {
    return (
      <Provider
        store={store}
      >
        <PersistGate 
          loading={<Text>Cargando...</Text>}
          persistor={persistor}>
          <Home>
            <Header/>
            
            <Player/>
            {
            // <Text>Buscador</Text>
            }

            <LastMovieList/>
            <SuggestionList/>
          </Home>
        </PersistGate>
      </Provider>
    );
  }
}
