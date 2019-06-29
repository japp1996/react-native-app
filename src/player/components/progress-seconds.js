import React from 'react';
import {
	StyleSheet,
	View,
	TouchableHighlight,
	TouchableOpacity,
	TouchableWithoutFeedback
} from 'react-native';

function ProgressSeconds(props) {
	return (
		<View style={styles.container}>
			<View style={props.css}>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		width: 100,
		height: 10,
		backgroundColor: 'gray',
		marginLeft:20,
		marginRight:20
	},
});

export default ProgressSeconds;