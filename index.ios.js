import React, { Component } from 'react';
import { Text, View, AppRegistry, StyleSheet } from 'react-native';

class App extends Component {
  render() {
    return (
      <View style={ styles.container }>
        <Text>
          Hello, Workshop!
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
})



AppRegistry.registerComponent('ReactNativeWorkshop', () => App);
