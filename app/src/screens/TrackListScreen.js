import React from "react";
import { View, StyleSheet } from "react-native";
import { Text, Button } from "react-native-elements";

const styles = StyleSheet.create({
  h1: {
    fontSize: 48,
  },
});

const TrackListScreen = ({ navigation }) => {
  return (
    <>
      <Text h1>Track List</Text>
      <Button
        title="Go to TrackDetail"
        onPress={() => navigation.navigate("TrackDetail")}
      />
    </>
  );
};

export default TrackListScreen;
