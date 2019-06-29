import React from 'react';
import {
	View, 
	Text, 
	ActivityIndicator, 
	Image, 
	StyleSheet
} from 'react-native';

function Loading(props) {
	return (
		<View style={styles.container}>
			<Image
			  style={styles.logo}
			  source={require('../../../assets/logo.png')}
			/>		
			<ActivityIndicator/>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		//Todo el ancho y todo el alto de la pantalla
		flex: 1,

		backgroundColor: 'white',
		alignItems: 'center',
		justifyContent: 'center',
	},
	logo: {
		width: 200,
		height: 80,
		resizeMode: 'contain',
		marginBottom: 10
	}
})

export default Loading;