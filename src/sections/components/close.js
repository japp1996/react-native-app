import React from 'react';
import {
	StyleSheet,
	TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

function Close(props) {
	return (
		<TouchableOpacity
			style={styles.container}
			onPress={props.onPress}>	
			<Icon name="closecircle" style={styles.icon} size={40}/>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	icon: {
		color: 'white'
	}
})

export default Close;