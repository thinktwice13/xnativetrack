import * as Location from 'expo-location';

const movementKm = 0.00001;

const getLocation = increment => ({
  timestamp: 1000000000,
  coords: {
    latitude: 39.4689865 + increment * movementKm,
    longitude: -0.333238 + increment * movementKm,
    accuracy: 5,
    altitudeAccuracy: 5,
    altitude: 5,
    speed: 0,
    heading: 0,
  },
});

let counter = 0;
setInterval(() => {
  Location.EventEmitter.emit('Expo.locationChanged', {
    watchId: Location._getCurrentWatchId(),
    location: getLocation(counter),
  });
  counter++;
}, 1000);
