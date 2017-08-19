import React, { Component } from 'react'
import { AppRegistry, View, StyleSheet, Text } from 'react-native'

class ReactNativeWorkshop extends Component{
    render() {
        return (
          <View style={styles.mainContainer}>
            <View style={styles.toolbar}>
                <Text style={styles.button}>Right</Text>
                <Text style={styles.title}>Title</Text>
                <Text style={styles.button}>Left</Text>
            </View>
          </View>
        );
    }
}

var styles = StyleSheet.create({
});

AppRegistry.registerComponent('ReactNativeWorkshop', () => ReactNativeWorkshop);
