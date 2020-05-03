import createDataContext from './createDataContext';
import trackerApi from '../services/tracker';

const trackReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'fetch_tracks':
      return payload;
    default:
      return state;
  }
};

const fetchTracks = dispatch => async () => {
  const { data: tracks } = await trackerApi.get('/tracks');
  dispatch({ type: 'fetch_tracks', payload: tracks });
};
const createTrack = dispatch => async (name, locations) => {
  await trackerApi.post('/tracks', { name, locations });
};

export const { Provider, Context } = createDataContext(
  trackReducer,
  { fetchTracks, createTrack },
  []
);
