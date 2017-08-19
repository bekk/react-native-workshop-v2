import React, { Component } from 'react'
import { AppRegistry, View, StyleSheet, StatusBar, Text } from 'react-native'

class ReactNativeWorkshop extends Component{
    render() {
        return (
          <View style={styles.mainContainer}>
            <StatusBar barStyle="light-content" />
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
  toolbar:{
    backgroundColor:'#4d4d4d',
    paddingTop: 30,
    paddingBottom: 10,
    flexDirection:'row-reverse'    //Step 1
  },
  button:{
    width: 70,            //Step 1
    color: '#fff',
    textAlign: 'center'
  },
  title:{
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    flex:1                //Step 1
  },
});

AppRegistry.registerComponent('ReactNativeWorkshop', () => ReactNativeWorkshop);
