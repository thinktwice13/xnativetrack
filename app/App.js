import * as React from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";

// import screens
import Screens from "./src/screens";
const {
  Account,
  Signup,
  Signin,
  TrackCreate,
  TrackList,
  TrackDetail,
} = Screens;

const instructions = Platform.select({
  ios: `Press Cmd+R to reload,\nCmd+D or shake for dev menu`,
  android: `Double tap R on your keyboard to reload,\nShake or press menu button for dev menu`,
});

const swicthNavigator = createSwitchNavigator({
  loginFlow: createStackNavigator({
    Signup,
    Signin,
  }),
  mainFlow: createBottomTabNavigator({
    trackListFloe: createStackNavigator({
      TrackList,
      TrackDetail,
    }),
    Account,
    TrackCreate,
  }),
});

export default createAppContainer(swicthNavigator);

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.titleText}>Hello world</Text>
//       <Text style={styles.welcome}>Welcome to React Native!</Text>
//     </View>
//   );
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5,
  },
  titleText: {
    fontSize: 48,
    fontWeight: "bold",
  },
});
