import createDataContext from './createDataContext';
import trackerApi from '../services/tracker';

const trackReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    default:
      return state;
  }
};

const fetchTracks = dispatch => () => {};
const createTrack = dispatch => async (name, locations) => {
  console.log({ name, locations: locations.length });
  await trackerApi.post('/tracks', { name, locations });
};

export const { Provider, Context } = createDataContext(
  trackReducer,
  { fetchTracks, createTrack },
  []
);
