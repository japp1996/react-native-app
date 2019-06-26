import React from 'react';
import {View,Text,Image,StyleSheet,SafeAreaView} from 'react-native';

function Header(props) {
	return (
		<View>
			<SafeAreaView>
				<Image source={'./assets/logo.png'} style={styles.logo}/>
			</SafeAreaView>
		</View>
	)
}

const styles = StyleSheet.create({
	logo: {
		width: 80,
		height: 20,
	}
})

export default Header;