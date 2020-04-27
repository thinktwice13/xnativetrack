import "../_mockLocation";
import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { Text, Button } from "react-native-elements";
import { SafeAreaView } from "react-navigation";
import Map from "../components/Map";
import {
  requestPermissionAsync,
  watchPositionAsync,
  Accuracy,
} from "expo-location";

const styles = StyleSheet.create({
  h1: {
    fontSize: 48,
  },
});

const TrackCreateScreen = () => {
  const [err, setErr] = useState(null);

  const startWatching = async () => {
    try {
      await requestPermissionAsync();
      await watchPositionAsync(
        {
          accuracy: Accuracy.BestForNavigation,
          timeInterval: 1000,
          distanceInterval: 10,
        },
        (location) => {
          console.log(location);
        }
      );
    } catch (error) {
      console.log({ error });
      setErr(error);
    }
  };

  useEffect(() => {
    startWatching();
  });

  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <Text h3>I'm a map</Text>
      <Map />
      {err ? <Text>Please enable location</Text> : null}
    </SafeAreaView>
  );
};

export default TrackCreateScreen;
