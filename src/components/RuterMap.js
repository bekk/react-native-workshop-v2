import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import MapView from 'react-native-maps';
import * as stopsActions from '../actions/stopsActions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


/* Koordinatene til Radisson */
const LATITUDE = 59.918285;
const LONGITUDE = 10.733771;
const LATITUDE_DELTA = 0.0092;
const LONGITUDE_DELTA = 0.0071;

export class RuterMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      region: {
        latitude:LATITUDE,
        longitude:LONGITUDE,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA
      }
    }
  }

  render(){
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          provider={this.props.provider}
          region={this.state.region}
          ref={ref => {this.map = ref}}>
          <Text>Her er det lurt å starte :)</Text>
        </MapView>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center'
  }
});

export default connect(state => ({
  stops: state.stops
}),
(dispatch) => ({
  actions: bindActionCreators(stopsActions,dispatch)
})
)(RuterMap);
