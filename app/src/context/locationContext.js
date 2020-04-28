import createDataContext from './createDataContext';
import { navigate } from '../navigationRef';

const locationReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'add_current_location':
      return { ...state, currentLocation: payload };
    default:
      return state;
  }
};

const startRecording = dispatch => () => {};
const stopRecording = dispatch => () => {};
const addLocation = dispatch => location => {
  console.log('Tracking location...');

  dispatch({ type: 'add_current_location', payload: location });
};

export const { Provider, Context } = createDataContext(
  locationReducer,
  { startRecording, stopRecording, addLocation },
  { recording: false, locations: [], currentLocation: null }
);
