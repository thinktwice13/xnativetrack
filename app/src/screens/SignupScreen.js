import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";

const styles = StyleSheet.create({
  h1: {
    fontSize: 48,
  },
});

const SignupScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.h1}>Signup Screen</Text>
      <Button
        title="Go to signin"
        onPress={() => navigation.navigate("Signin")}
      />
      <Button
        title="Go main flow"
        onPress={() => navigation.navigate("mainFlow")}
      />
    </View>
  );
};

export default SignupScreen;
