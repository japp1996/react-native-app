import React from 'react';
import {
	StyleSheet,
	TouchableHighlight,
	TouchableOpacity,
	TouchableWithoutFeedback
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

function PlayPause(props) {
	return (
		<TouchableHighlight 
			onPress={props.onPress}
			style={styles.container}
			//underlayColor="red"
			hitSlop={styles.hitSlop}
		>
			{
				props.paused ?  <Icon name="play" size={20}></Icon> : <Icon name="pause" size={20}></Icon>
			}
		</TouchableHighlight>
	)
}

const styles = StyleSheet.create({
	container: {

	},
	button: {
		color:'white',
		fontSize: 10,
	},
	hitSlop: {
		left: 5,
		bottom: 5,
		right: 5,
		top: 5,
	}
});

export default PlayPause;