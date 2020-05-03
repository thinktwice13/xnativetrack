import { useState, useEffect } from 'react';
import {
  // requestPermissionAsync,
  watchPositionAsync,
  Accuracy,
} from 'expo-location';
import * as Permissions from 'expo-permissions';

export default (isFocused, isRecording, callback) => {
  const [err, setErr] = useState(null);
  // const [subscriber, setSubscriber] = useState(null); // Moved to useEffect because it is not used anywhere else

  useEffect(() => {
    let subscriber;
    const shouldTrack = isFocused || isRecording;

    /**
     * sets subscriber
     */
    const startWatching = async () => {
      try {
        // await requestPermissionAsync();
        await Permissions.askAsync(Permissions.LOCATION);
        subscriber = await watchPositionAsync(
          {
            accuracy: Accuracy.BestForNavigation,
            timeInterval: 5000,
            distanceInterval: 10,
          },
          callback
        );

        // setSubscriber(sub);
      } catch (error) {
        console.log({ error });
        setErr(error);
      }
    };

    if (shouldTrack) {
      if (!subscriber) {
        startWatching();
        console.log(`Started watching`);
      }
    } else {
      if (subscriber) {
        subscriber.remove();
      }
      subscriber = null;
    }

    // return a cleanup function for use just before the next time we start watching for location again
    return () => {
      if (subscriber) {
        subscriber.remove();
      }
    };
    /* eslint-disable */
  }, [isFocused, isRecording]);
  /* eslint-enable */

  return [err];
};
