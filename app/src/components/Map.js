import React, { useContext } from 'react';
import { StyleSheet, ActivityIndicator } from 'react-native';
import { Text } from 'react-native-elements';
import MapView, { Polyline, Circle } from 'react-native-maps';
import { Context as LocationContext } from '../context/locationContext';

const styles = StyleSheet.create({
  map: {
    height: 300,
  },
});

const Map = () => {
  const { state } = useContext(LocationContext);

  const { currentLocation } = state;

  console.log({ state });

  // let points = [];
  // for (let i = 0; i < 20; ++i) {
  //   points.push({
  //     latitude: 37 + i * 0.001,
  //     longitude: -122 + i * 0.001,
  //   });
  // }

  if (!currentLocation)
    return <ActivityIndicator size="large" style={{ marginTop: 200 }} />;
  return (
    <>
      <MapView
        style={styles.map}
        initialRegion={{
          ...currentLocation.coords,
          longitudeDelta: 0.01,
          latitudeDelta: 0.01,
        }}
        region={{
          ...currentLocation.coordscd,
          longitudeDelta: 0.01,
          latitudeDelta: 0.01,
        }}
      >
        <Circle
          center={currentLocation.coords}
          radius={30}
          strokeColor="rgba(158, 138, 225, 1.0)"
          fillColor="rgba(158,158, 225, 0.3)"
        />
        {/* <Polyline coordinates={points} /> */}
      </MapView>
    </>
  );
};
export default Map;
