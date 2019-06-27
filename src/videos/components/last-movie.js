import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
  ImageBackground
} from 'react-native';

function LastMovie(props) {
	return (
		<ImageBackground
			style={styles.wrapper}
			source={{uri: props.background_image}}
		>
			<Text style={styles.textGenres}>
				{ props.genres[0] }
			</Text>
		</ImageBackground>
	)
}

const styles = StyleSheet.create({
	textGenres: {
		color: '#fff',
		fontSize: 40,
		fontWeight: 'bold',
		textShadowColor: 'rgba(0,0,0,.75)',
		textShadowOffset: {
			width: 2,
			height: 2
		},
		textShadowRadius: 0
	},
	wrapper: {
		width: 250,
		height: 100,
		borderRadius: 10,
		overflow: 'hidden',
		justifyContent: 'center',
		alignItems: 'center'
	}
});


export default LastMovie;