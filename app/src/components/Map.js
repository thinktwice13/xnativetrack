import React from "react";
import { StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import MapView, { Polyline } from "react-native-maps";

const styles = StyleSheet.create({
  map: {
    height: 300,
  },
});

const Map = () => {
  let points = [];
  for (let i = 0; i < 20; ++i) {
    points.push({
      latitude: 37 + i * 0.001,
      longitude: -122 + i * 0.001,
    });
  }

  return (
    <>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 37,
          longitude: -122,
          longitudeDelta: 0.01,
          latitudeDelta: 0.01,
        }}
      >
        <Polyline coordinates={points} />
      </MapView>
    </>
  );
};

export default Map;
