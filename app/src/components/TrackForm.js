import React, { useContext } from 'react';
import { Input, Button } from 'react-native-elements';
import Spacer from './Spacer';
import { Context as LocationContext } from '../context/locationContext';

const TrackForm = () => {
  const {
    state: { name, recording },
    startRecording,
    stopRecording,
    changeName,
  } = useContext(LocationContext);

  return (
    <>
      <Spacer>
        <Input
          placeholder="Enter name"
          onChangeText={changeName}
          value={name}
        />
      </Spacer>
      {!recording ? (
        <Button title="Start Recording" onPress={startRecording} />
      ) : (
        <Button
          buttonStyle={{ backgroundColor: 'salmon' }}
          title="Stop Recording"
          onPress={stopRecording}
        />
      )}
    </>
  );
};

export default TrackForm;
