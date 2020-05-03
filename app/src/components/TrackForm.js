import React, { useContext } from 'react';
import { Input, Button } from 'react-native-elements';
import Spacer from './Spacer';
import { Context as LocationContext } from '../context/locationContext';
import useSaveTrack from '../hooks/useSaveTrack';

const TrackForm = () => {
  const {
    state: { name, recording, locations },
    startRecording,
    stopRecording,
    changeName,
  } = useContext(LocationContext);
  const [saveTrack] = useSaveTrack();

  return (
    <>
      <Spacer>
        <Input
          placeholder="Enter name"
          onChangeText={changeName}
          value={name}
        />
      </Spacer>
      <Spacer>
        {!recording ? (
          <Button title="Start Recording" onPress={startRecording} />
        ) : (
          <Button
            buttonStyle={{ backgroundColor: 'salmon' }}
            title="Stop Recording"
            onPress={stopRecording}
          />
        )}
      </Spacer>
      <Spacer>
        <Button
          title="Save Track"
          onPress={saveTrack}
          disabled={recording || !locations.length}
        />
      </Spacer>
    </>
  );
};

export default TrackForm;
