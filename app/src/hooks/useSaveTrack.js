import { useContext } from 'react';
import { Context as TrackContext } from '../context/trackContext';
import { Context as LocationContext } from '../context/locationContext';

export default () => {
  const { createTrack } = useContext(TrackContext);
  const {
    state: { locations, trackName },
  } = useContext(LocationContext);

  const saveTrack = () => {
    createTrack(trackName, locations);
  };

  return [saveTrack];
};
