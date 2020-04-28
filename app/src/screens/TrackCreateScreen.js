import '../_mockLocation';
import React, { useState, useEffect, useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button } from 'react-native-elements';
import { SafeAreaView } from 'react-navigation';
import {
  // requestPermissionAsync,
  watchPositionAsync,
  Accuracy,
} from 'expo-location';
import * as Permissions from 'expo-permissions';
import Map from '../components/Map';
import { Context as LocationConttext } from '../context/locationContext';

const styles = StyleSheet.create({
  h1: {
    fontSize: 48,
  },
});

const TrackCreateScreen = () => {
  const [err, setErr] = useState(null);
  const { addLocation } = useContext(LocationConttext);

  const startWatching = async () => {
    try {
      // await requestPermissionAsync();
      await Permissions.askAsync(Permissions.LOCATION);
      await watchPositionAsync(
        {
          accuracy: Accuracy.BestForNavigation,
          timeInterval: 1000,
          distanceInterval: 10,
        },
        location => {
          addLocation(location);
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
    <SafeAreaView forceInset={{ top: 'always' }}>
      <Text h3>I'm a map</Text>
      <Map />
      {err ? <Text>Please enable location</Text> : null}
    </SafeAreaView>
  );
};

export default TrackCreateScreen;
