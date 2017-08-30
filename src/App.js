import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class App extends Component {

  render() {

    return (
      <View style={styles.container}>
        <Text>Hei og hå - du kan starte her!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default App;
