import React, { useContext } from 'react';
import { FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { Text, Button, ListItem } from 'react-native-elements';
import { NavigationEvents } from 'react-navigation';
import { Context as TrackContext } from '../context/trackContext';

const styles = StyleSheet.create({
  h1: {
    fontSize: 48,
  },
});

const TrackListScreen = ({ navigation }) => {
  const { state, fetchTracks } = useContext(TrackContext);
  console.log({ state });
  return (
    <>
      <NavigationEvents onWillFocus={fetchTracks} />
      <Text h1>Track List</Text>
      <FlatList
        data={state}
        keyExtractor={item => item._id}
        renderItem={({ item }) => (
          <TouchableOpacity>
            <ListItem chevron title={item.name} />
          </TouchableOpacity>
        )}
      />
      <Button
        title="Go to TrackDetail"
        onPress={() => navigation.navigate('TrackDetail')}
      />
    </>
  );
};

export default TrackListScreen;
