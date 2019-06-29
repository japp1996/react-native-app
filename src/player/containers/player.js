
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ActivityIndicator,
  ProgressBarAndroid
} from 'react-native';
import Video from 'react-native-video';
import Layout from '../components/layout';
import ControlLayout from '../components/control-layout';
import PlayPause from '../components/play-pause';
import FullScreen from '../components/full-screen';
import ProgressSeconds from '../components/progress-seconds';
import moment from 'moment';
import Orientation from 'react-native-orientation';

class Player extends Component {
  state = {
    loading: true,
    paused: false,
    fullScreen: false,
    secondsActual: "00:00",
    totalTime: "00:00",
    width:0,
    fullscreenOrientation: ''
  }
  onBuffer = ({isBuffering }) => {
    this.setState({
      loading: isBuffering
    })
  }
  onLoad = ({currentTime, duration}) => {
    this.setState({
      loading: false,
      totalTime: moment.utc(duration*1000).format('mm:ss')
    })
  }
  playPause = () => {
    this.setState({
      paused: !this.state.paused
    })
  }
  fullScreen = () => {
    Orientation.lockToLandscape()

    this.setState({
      fullScreen: !this.state.fullScreen,
      fullscreenOrientation: 'landscape'
    })
  }
  onProgress = ({currentTime,playableDuration,seekableDuration}) => {
    this.setState({
      secondsActual: moment.utc(currentTime*1000).format('mm:ss'),
      width: (currentTime * 100) / seekableDuration
    })
  }
  onTimedMetadata = ({metadata}) => {
    
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
              onLoad={ this.onLoad }
              paused={this.state.paused}
              fullscreen={this.state.fullScreen}
              onProgress={this.onProgress}
              onTimedMetadata={this.onTimedMetadata}
              fullscreenOrientation={this.fullscreenOrientation}
	            />
	    	}
        loader={
          <ActivityIndicator color="red"/>
        }
        controls={
          <ControlLayout>
            <PlayPause 
            onPress={this.playPause}
            paused={this.state.paused}
            />
            <ProgressSeconds css={
              {
                width:this.state.width,
                height:10,
                backgroundColor: 'black',
              } 
            }></ProgressSeconds>
            <Text> {this.state.secondsActual } </Text>
            <Text> {this.state.totalTime } </Text>
            <FullScreen onPress={this.fullScreen}/>
          </ControlLayout>
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