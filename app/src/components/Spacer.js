import React from "react";
import { View, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  spacer: {
    margin: 15,
  },
});

export default ({ children }) => {
  return <View style={styles.spacer}>{children}</View>;
};
