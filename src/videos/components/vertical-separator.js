import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text
} from 'react-native';

function VerticalSeparator(props) {
    return (
      <View style={[
      	styles.separator,
      	{
      		borderTopColor: (props.color) ? props.color : '#fff'
      	}
      ]}>
      </View>
    )
}

const styles = StyleSheet.create({
	separator: {
		borderTopWidth: 1
	}
})

export default VerticalSeparator;