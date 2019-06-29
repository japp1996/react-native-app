import React from 'react';
import {
	StyleSheet,
	TouchableHighlight,
	TouchableOpacity,
	TouchableWithoutFeedback
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

function FullScreen(props) {
	return (
		<TouchableOpacity style={styles.container} onPress={props.onPress} >
			<Icon name="fullscreen" size={30}/>
		</TouchableOpacity>
	)
}

const styles= StyleSheet.create({
	container: {
		position:'absolute',
		right:0
	}
});

export default FullScreen;