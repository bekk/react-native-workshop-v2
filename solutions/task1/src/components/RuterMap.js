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
import { WorkshopXYToLatLon } from '../utils/geoutils';
import { calculateMinMaxUrl } from '../utils/maputils';


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
    this.getStopsData.bind(this);
  }

  componentDidMount(){
    this.getStopsData(LATITUDE, LONGITUDE, LATITUDE_DELTA, LONGITUDE_DELTA);
  }

  onRegionChange(region) {
    this.setState({ region });
  }

  render(){
    let { stops } = this.props;
    let { region } = this.state;
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          provider={this.props.provider}
          region={this.state.region}
          ref={ref => {this.map = ref}}
          onRegionChange={() => this.onRegionChange()}
          onRegionChangeComplete={ (region) => {
            this.getStopsData(region.latitude, region.longitude, region.latitudeDelta, region.longitudeDelta);
            this.onRegionChange(region);
            }
          }>
          {stops.map(stop => {
              return (
                <MapView.Marker
                    key={stop.ID}
                    coordinate={WorkshopXYToLatLon(stop.X, stop.Y)}>
                </MapView.Marker>
              )
            })}
        </MapView>
    </View>
  );
  }

  getStopsData(latitude, longitude, latitudeDelta, longitudeDelta){
    const { actions } = this.props;

    let stops = fetch(calculateMinMaxUrl(latitude,longitude, latitudeDelta, longitudeDelta))
      .then((response) => response.json())
      .then((stops) => actions.setStops(stops))
      .catch((err) => console.log(err));
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
