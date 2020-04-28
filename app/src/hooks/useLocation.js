import { useState, useEffect } from 'react';
import {
  // requestPermissionAsync,
  watchPositionAsync,
  Accuracy,
} from 'expo-location';
import * as Permissions from 'expo-permissions';

export default callback => {
  const [err, setErr] = useState(null);

  const startWatching = async () => {
    try {
      // await requestPermissionAsync();
      await Permissions.askAsync(Permissions.LOCATION);
      await watchPositionAsync(
        {
          accuracy: Accuracy.BestForNavigation,
          timeInterval: 1000,
          distanceInterval: 10,
        },
        callback
      );
    } catch (error) {
      console.log({ error });
      setErr(error);
    }
  };

  useEffect(() => {
    startWatching();
  });

  return [err];
};
