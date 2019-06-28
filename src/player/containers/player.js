
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  ActivityIndicator,
} from 'react-native';
import Video from 'react-native-video';
import Layout from '../components/layout';

class Player extends Component {
  state = {
    loading: true,
  }
  onBuffer = ({isBuffering }) => {
    this.setState({
      loading: isBuffering
    })
  }
  render() {
    return (
    	<Layout 
        loading={this.state.loading}
    		video={
	    		<Video source={{uri:'https://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4'}} 
	            style={styles.video}
	            resizeMode="contain"
              onBuffer={this.onBuffer}
	            />
	    	}
        loader={
          <ActivityIndicator color="red"/>
        }
    	>
    	</Layout>
    );
  }
}

const styles = StyleSheet.create({
	video: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      top: 0,
    },
    container: {
    	flex: 1, 
    	height:100
  	}
});


export default Player;