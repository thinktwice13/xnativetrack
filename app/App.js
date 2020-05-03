import * as React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Provider as Authprovider } from './src/context/authContext';
import { Provider as LocationProvider } from './src/context/locationContext';
import { setNavigator } from './src/navigationRef';
import { Provider as TrackProivder } from './src/context/TrackCotext';

// import screens
import Screens from './src/screens';

const {
  ResolveAuth,
  Account,
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
  ResolveAuth,
  loginFlow: createStackNavigator(
    {
      Signin,
    },
    {
      headerMode: 'none',
    }
  ),
  mainFlow: createBottomTabNavigator({
    trackListFlow: createStackNavigator({
      TrackList,
      TrackDetail,
    }),
    Account,
    TrackCreate,
  }),
});

const App = createAppContainer(swicthNavigator);

export default () => (
  <TrackProivder>
    <LocationProvider>
      <Authprovider>
        <App
          ref={navigator => {
            setNavigator(navigator);
          }}
        />
      </Authprovider>
    </LocationProvider>
  </TrackProivder>
);

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
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  titleText: {
    fontSize: 48,
    fontWeight: 'bold',
  },
});
