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
const createTrack = dispatch => (name, locations) => {
  console.log({ name, locations: locations.length });
};

export const { Provider, Context } = createDataContext(
  trackReducer,
  { fetchTracks, createTrack },
  []
);
