import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import { Text, Button } from "react-native-elements";
import { AuthContext } from "../context/authContext";

const styles = StyleSheet.create({
  h1: {
    fontSize: 48,
  },
});

const AccountScreen = () => {
  const { signout } = useContext(AuthContext);

  return (
    <>
      <Text h1>Account Screen</Text>
      <Button onPress={() => dispatch("signout")} />
    </>
  );
};

export default AccountScreen;
