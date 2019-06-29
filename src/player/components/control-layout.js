import React from 'react';

import {
  StyleSheet,
  View,
} from 'react-native';

function ControlLayout(props) {
	return (
		<View style={styles.container}>
			{props.children}
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: 'rgba(255,255,255,.3)',
		position: 'absolute',
		left: 0,
		right:0,
		bottom:0,
		height: 35,
		flexDirection: 'row',
	    alignItems: 'center',
	    paddingHorizontal: 10
	}
});


export default ControlLayout;