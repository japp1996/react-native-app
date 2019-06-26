import React from 'react';
import {View,Text,Image,StyleSheet,SafeAreaView} from 'react-native';

function Header(props) {
	return (
		<View>
			<SafeAreaView>
				<View style={styles.container}>
					<Image source={require('../../../assets/logo.png')} style={styles.logo}/>
					<View style={styles.right}>
						{props.children}
					</View>
				</View>
			</SafeAreaView>
		</View>
	)
}

const styles = StyleSheet.create({
	logo: {
		width: 50,
		height: 50,
		resizeMode: 'contain'
	},
	container: {
		backgroundColor:'black',
		paddingVertical: 10,
		paddingHorizontal: 10,
		flexDirection: 'row'
	},
	right: {
		color: '#ffffff',
		fontSize: 12,
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'flex-end',
	}
})

export default Header;