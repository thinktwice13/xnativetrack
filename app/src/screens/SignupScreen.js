import React, { useState, useContext } from "react";
import { View, StyleSheet } from "react-native";
import { Text, Button, Input } from "react-native-elements";
import Spacer from "../components/Spacer";
import { Context as AuthContext } from "../context/authContext";

const styles = StyleSheet.create({
  h1: {
    fontSize: 48,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 200,
  },
});

const SignupScreen = ({ navigation }) => {
  const { state, signup } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <Spacer>
        <Text h4>Sign up for Tracker</Text>
      </Spacer>
      <Input
        label="Email"
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Spacer />
      <Input
        secureTextEntry
        label="Password"
        value={password}
        onChangeText={setPassword}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Spacer>
        <Button
          title="Signup"
          onPress={() => {
            signup({ email, password });
          }}
        />
      </Spacer>
    </View>
  );
};

export default SignupScreen;
