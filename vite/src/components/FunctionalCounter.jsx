import React from 'react';
import {useState} from 'react';

function FunctionakCounter() {
  const [track, setTrack] = useState(0);
  const increment = () => {
    setTrack(track + 1);
    if (track >= 10) {
      setTrack(1);
    }
  };
  const decrement = () => {
    setTrack(track - 1);
    if (track <= 1) {
      setTrack(10);
    }
  };
  return (
    <div>
      <h3>Tracker Value: {track}</h3>
      <button style={{color: 'green'}} onClick={increment}>
        Increment
      </button>
      <button style={{color: 'red'}} onClick={decrement}>
        Decrement
      </button>
    </div>
  );
}

export default FunctionakCounter;
