import React from "react";
import { View, StyleSheet } from "react-native";
import { Text, Button, Input } from "react-native-elements";
import Spacer from "../components/Spacer";

const styles = StyleSheet.create({
  h1: {
    fontSize: 48,
  },
});

const SignupScreen = ({ navigation }) => {
  return (
    <>
      <Spacer>
        <Text h4>Sign up for Tracker</Text>
      </Spacer>
      <Input label="Email" />
      <Spacer />
      <Input label="Password" />
      <Spacer>
        <Button title="Signup" />
      </Spacer>
    </>
  );
};

export default SignupScreen;
