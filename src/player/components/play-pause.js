import React from 'react'
import {
	View,
	StyleSheet,
	Text,
	TouchableHighlight,
	TouchableOpacity,
	TouchableWithoutFeedback
} from 'react-native';

function PlayPause(props) {
	return (
		<TouchableHighlight 
			onPress={props.onPress}
			style={styles.container}
			underlayColor="red"
			hitSlop={styles.hitSlop}
		>
			{
				props.paused ? 
				<Text style={styles.button}> PLAY </Text> 
				: 
				<Text style={styles.button}> PAUSE </Text>

				
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
		top: 5
	}
})

export default PlayPause;