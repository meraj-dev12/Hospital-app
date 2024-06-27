// src/components/CurrentPatient.jsx
import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:5173'); // Ensure this matches your server URL

const CurrentPatient = () => {
  const [currentQueueNumber, setCurrentQueueNumber] = useState(0);

  useEffect(() => {
    socket.on('updateCurrentQueue', (queueNumber) => {
      setCurrentQueueNumber(queueNumber);
    });

    // Clean up the effect
    return () => {
      socket.off('updateCurrentQueue');
    };
  }, []);

  return (
    <div className='text-center'>
      <h1 className='text-2xl text-center'>Current Patient Queue Number</h1>
      <div className='text-3xl'>{currentQueueNumber}</div>
    </div>
  );
};

export default CurrentPatient;