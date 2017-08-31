import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList
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
                    <MapView.Callout style={{ flex: 1, position: 'relative' }}>
                      <View style={styles.callout}>
                        <Text style={styles.stopTitle}>{stop.Name}</Text>
                        <Text>Linjer:</Text>
                        <FlatList
                          data={stop.Lines}
                          keyExtractor={(item) => item.ID}
                          renderItem={({item}) => <Text>{item.Name}</Text>} />
                      </View>
                    </MapView.Callout>
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
  radius: {
    height: 50,
    width: 50,
    borderRadius: 50 / 2,
    overflow: 'hidden',
    backgroundColor: 'rgba(0,122,255,0.1)',
    borderWidth: 1,
    borderColor: 'rgba(0,122,255,0.3)',
    alignItems: 'center',
    justifyContent: 'center'
  },
  marker: {
    height: 20,
    width: 20,
    borderWidth: 3,
    borderColor: 'white',
    borderRadius: 20 / 2,
    overflow: 'hidden',
    backgroundColor: '#007AFF'
  },
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  callout: {
    height: 100,
    width: 300
  },
  stopTitle: {
    fontSize: 20,
    borderBottomWidth: 1,
    paddingBottom: 2,
    fontWeight: '500'
  }
});

export default connect(state => ({
  stops: state.stops
}),
(dispatch) => ({
  actions: bindActionCreators(stopsActions,dispatch)
})
)(RuterMap);
