import '../_mockLocation';
import React, { useContext, useCallback } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button } from 'react-native-elements';
import PropTypes from 'prop-types';
import {
  SafeAreaView,
  NavigationEvents,
  withNavigationFocus,
} from 'react-navigation';
import useLocation from '../hooks/useLocation';
import Map from '../components/Map';
import { Context as LocationConttext } from '../context/locationContext';
import TrackForm from '../components/TrackForm';

const styles = StyleSheet.create({
  h1: {
    fontSize: 48,
  },
});

const TrackCreateScreen = ({ isFocused }) => {
  const { state, addLocation } = useContext(LocationConttext);
  const { recording: isRecording } = state;
  console.log(`outside ${isRecording}`);

  const [err] = useLocation(isFocused, isRecording, location => {
    console.log(`inside ${state.recording}`);

    addLocation(location, isRecording);
  });

  // First arg cannot be a named variable bc then it referes to the same pos in memory on rerender and stops useEffect in useLocation from rerunning

  return (
    <SafeAreaView forceInset={{ top: 'always' }}>
      <Text h3>I'm a map</Text>
      <Map />
      {/* <NavigationEvents
        onWillBlur={() => {
          console.log(`I'm leaving`);
        }}
      /> */}
      {err ? <Text>Please enable location</Text> : null}
      <TrackForm />
    </SafeAreaView>
  );
};

TrackCreateScreen.propTypes = {
  isFocused: PropTypes.bool,
};

export default withNavigationFocus(TrackCreateScreen);
