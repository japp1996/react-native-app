import React from 'react';
import { 
	View, 
	Text, 
	StyleSheet, 
	ImageBackground,
} from 'react-native';

function LastMovieListLayout(props) {
	return(
		<ImageBackground source={require('../../../assets/background.jpg')} style={styles.container}>
			<Text style={styles.title}>
				{ props.title }
			</Text>
			{ props.children }
		</ImageBackground>
	)
}

const styles = StyleSheet.create({
	container: {
		paddingVertical: 30,
		paddingHorizontal: 10
	},
	title: {
		width:'auto',
		color: 'black',
		fontSize: 24,
		marginBottom: 10,
		fontWeight: 'bold',
		backgroundColor: '#fff',
		textAlign: 'center',
	}
})

export default LastMovieListLayout