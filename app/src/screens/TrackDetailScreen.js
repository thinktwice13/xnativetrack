import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button } from 'react-native-elements';
import MapView, { Polyline } from 'react-native-maps';
import { Context as TrackContext } from '../context/trackContext';

const styles = StyleSheet.create({
  h1: {
    fontSize: 48,
  },
  map: {
    height: 300,
  },
});

const TrackDetailScreen = ({ navigation }) => {
  const { state } = useContext(TrackContext);
  const _id = navigation.getParam('_id');
  const track = state.find(item => item._id === _id);
  const initialCoords = track.locations[0].coords;

  return (
    <>
      <Text h1>{track.name}</Text>
      <MapView
        style={styles.map}
        initialRegion={{
          longitudeDelta: 0.01,
          latitudeDelta: 0.01,
          ...initialCoords,
        }}
      >
        <Polyline coordinates={track.locations.map(loc => loc.coords)} />
      </MapView>
    </>
  );
};

export default TrackDetailScreen;
