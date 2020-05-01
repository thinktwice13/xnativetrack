import { useState, useEffect } from 'react';
import {
  // requestPermissionAsync,
  watchPositionAsync,
  Accuracy,
} from 'expo-location';
import * as Permissions from 'expo-permissions';

export default (shouldTrack, isRecording, callback) => {
  const [err, setErr] = useState(null);
  const [subscriber, setSubscriber] = useState(null);

  useEffect(() => {
    const startWatching = async () => {
      try {
        // await requestPermissionAsync();
        await Permissions.askAsync(Permissions.LOCATION);
        const sub = await watchPositionAsync(
          {
            accuracy: Accuracy.BestForNavigation,
            timeInterval: 1000,
            distanceInterval: 10,
          },
          callback
        );

        setSubscriber(sub);
      } catch (error) {
        console.log({ error });
        setErr(error);
      }
    };

    if (shouldTrack) startWatching();
    else {
      subscriber.remove();
      setSubscriber(null);
    }
  /*eslint-disable */
  }, [shouldTrack, isRecording]);
  /*eslint-disable */

  return [err];
};
