import { useContext } from 'react';
import { Context as TrackContext } from '../context/trackContext';
import { Context as LocationContext } from '../context/locationContext';
import { navigate } from '../navigationRef';

export default () => {
  const { createTrack } = useContext(TrackContext);
  const {
    state: { locations, trackName },
    reset,
  } = useContext(LocationContext);

  const saveTrack = async () => {
    await createTrack(trackName, locations);
    reset();
    navigate('TrackList');
  };

  return [saveTrack];
};
