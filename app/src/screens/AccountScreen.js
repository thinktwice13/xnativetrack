import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import { Text, Button } from "react-native-elements";
import { Context as AuthContext } from "../context/authContext";
import Spacer from "../components/Spacer";
import { SafeAreaView } from "react-navigation";

const styles = StyleSheet.create({
  h1: {
    fontSize: 48,
  },
});

const AccountScreen = () => {
  const { signout } = useContext(AuthContext);

  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <Text h1>Account Screen</Text>
      <Button title="Signout" onPress={signout} />
    </SafeAreaView>
  );
};

export default AccountScreen;
