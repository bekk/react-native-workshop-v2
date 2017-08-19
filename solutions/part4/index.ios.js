import React, { Component } from 'react'
import { AppRegistry, View, StyleSheet, StatusBar, Text } from 'react-native'
import DogPost from './src/DogPost'

class ReactNativeWorkshop extends Component{
    render() {
        return (
          <View style={styles.mainContainer}>
            <StatusBar barStyle="light-content" />
            <View style={styles.toolbar}>
                <Text style={styles.toolbarButton}>Right</Text>
                <Text style={styles.toolbarTitle}>Title</Text>
                <Text style={styles.toolbarButton}>Left</Text>
            </View>
            <View style={styles.content}>
              <DogPost>
                <DogPost style={{ backgroundColor: '#dfdfdf'}}/>
                <DogPost style={{ backgroundColor: '#dfdfdf'}}/>
              </DogPost>
            </View>
          </View>
        );
    }
}

var styles = StyleSheet.create({
  toolbar: {
    backgroundColor: '#4d4d4d',
    paddingTop: 30,
    paddingBottom: 10,
    flexDirection: 'row-reverse'
  },
  button: {
    width: 70,
    color: '#fff',
    textAlign: 'center'
  },
  title: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    flex: 1
  },
  mainContainer: {
    flex: 1
  },
  content: {
    backgroundColor: 'white',
    padding: 10,
    flex: 1,
  }
});


AppRegistry.registerComponent('ReactNativeWorkshop', () => ReactNativeWorkshop);
