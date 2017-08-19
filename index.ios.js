import React, { Component } from 'react'
import { AppRegistry, View, StyleSheet, Text } from 'react-native'

class ReactNativeWorkshop extends Component{
    render() {
        return (
          <View style={styles.container}>
            <Text>
              Hello, workshop!
            </Text>
          </View>
        );
    }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

AppRegistry.registerComponent('ReactNativeWorkshop', () => ReactNativeWorkshop);
