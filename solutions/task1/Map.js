import React from 'react';
import { View, StyleSheet } from 'react-native';
import MapView from 'react-native-maps';

const Map = ({ header, startApp }) => (
  <View style={styles.container}>
    <MapView
      style={styles.map}
      initialRegion={{
        latitude: 59.918628,
        longitude: 10.733737,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject
  },
  map: {
    ...StyleSheet.absoluteFillObject
  }
});

export default Map;
