import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

import { startAppAction } from './actions/start-actions';

const mapStateToProps = ({ start }) => ({
  header: start.header
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  startApp: startAppAction
}, dispatch);

const Start = ({ header, startApp }) => (
  <View style={styles.container}>
    <Text>{header}</Text>
    <Button title="The Button" onPress={startApp} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Start);
