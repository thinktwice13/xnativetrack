import createDataContext from './createDataContext';

const locationReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'set_current_location':
      return { ...state, currentLocation: payload };
    case 'start_recording':
      return { ...state, recording: true };
    case 'stop_recording':
      return { ...state, recording: false };
    case 'add_location':
      return { ...state, locations: [...state.locations, payload] };
    case 'change_name':
      return { ...state, trackName: payload };
    case 'reset':
      return { ...state, trackName: '', locations: [] };
    default:
      return state;
  }
};

const changeName = dispatch => newName => {
  dispatch({ type: 'change_name', payload: newName });
};

const startRecording = dispatch => () => {
  dispatch({ type: 'start_recording' });
};
const stopRecording = dispatch => () => {
  dispatch({ type: 'stop_recording' });
};
const addLocation = dispatch => (location, recording) => {
  dispatch({ type: 'set_current_location', payload: location });
  if (recording) {
    dispatch({ type: 'add_location', payload: location });
  }
};

const reset = dispatch => () => {
  dispatch({ type: 'reset' });
};

export const { Provider, Context } = createDataContext(
  locationReducer,
  { startRecording, stopRecording, addLocation, changeName, reset },
  { recording: false, locations: [], currentLocation: null, trackName: '' }
);
