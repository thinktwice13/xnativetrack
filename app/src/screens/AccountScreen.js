import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import { Text, Button } from "react-native-elements";
import { Context as AuthContext } from "../context/authContext";
import Spacer from "../components/Spacer";

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
      <Button title="Signout" onPress={signout} />
    </>
  );
};

export default AccountScreen;
