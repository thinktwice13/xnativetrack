import '../_mockLocation';
import React, { useContext } from 'react';
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

const styles = StyleSheet.create({
  h1: {
    fontSize: 48,
  },
});

const TrackCreateScreen = ({ isFocused }) => {
  const { addLocation } = useContext(LocationConttext);
  const [err] = useLocation(isFocused, addLocation);

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
    </SafeAreaView>
  );
};

TrackCreateScreen.propTypes = {
  isFocused: PropTypes.bool,
};

export default withNavigationFocus(TrackCreateScreen);
