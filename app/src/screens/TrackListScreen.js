import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";

const styles = StyleSheet.create({
  h1: {
    fontSize: 48,
  },
});

const TrackListScreen = ({ navigation }) => {
  return (
    <>
      <Text style={styles.h1}>TrackList Screen</Text>
      <Button
        title="Go to TrackDetail"
        onPress={() => navigation.navigate("TrackDetail")}
      />
    </>
  );
};

export default TrackListScreen;
