import React, { Component } from 'react';
import MovieLayout from '../components/movie-layout';
import Player from '../../player/containers/player';
import Header from '../../sections/components/header';
import Close from '../../sections/components/close';
import Details from '../../videos/components/details';
import { connect } from 'react-redux';
import Orientation from 'react-native-orientation';

import {
  StyleSheet,
  View,
  Animated
} from 'react-native';

class Movie extends Component {
  state = {
    opacity: new Animated.Value(0)
  }
  closeVideo = () => {
    this.props.dispatch({
      type: 'SET_SELECTED_MOVIE',
      payload: {
        movie: null
      }
    })
    Orientation.lockToPortrait()
  }
  componentDidMount() {
    //timing(Instace, Object) 
    Animated.timing(
      //An instance of Animated
      this.state.opacity,
      //Object
      {
        toValue: 1,
        duration: 1000,
      },

    ).start()
    //start method to run the function
  }
  render() {
    return (
      <Animated.View style={{
          flex: 1,
          opacity: this.state.opacity
      }}>
        <MovieLayout>
        	<Header>
            <Close onPress={this.closeVideo}/>
          </Header>
        	<Player/> 
          <Details {...this.props.movie}/>
        </MovieLayout>
      </Animated.View> 
    );
  }
}

const styles = StyleSheet.create({

});

function mapStateToProps(state) {
  return {movie:state.selectedMovie}
}

export default connect(mapStateToProps)(Movie);