import React, { Component } from 'react';
import MovieLayout from '../components/movie-layout';
import Player from '../../player/containers/player';
import Header from '../../sections/components/header';
import {
  StyleSheet,
  View,
} from 'react-native';

class Movie extends Component {
  render() {
    return (
      <MovieLayout>
      	<Header/>
      	<Player/> 
      </MovieLayout>
    );
  }
}

const styles = StyleSheet.create({

});


export default Movie;