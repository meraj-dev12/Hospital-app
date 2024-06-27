import React, { useState, useEffect } from 'react';
import axios from '../api/axios';  // Import the Axios instance
import socketIOClient from 'socket.io-client';

const PatientQueue = () => {
  const [patients, setPatients] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchPatients = async () => {
      const response = await axios.get('/api/patients');
      setPatients(response.data);
    };
    fetchPatients();

    const socket = socketIOClient('http://localhost:5173');
    socket.on('updateQueue', (updatedPatients) => {
      setPatients(updatedPatients);
    });

    return () => socket.disconnect();
  }, []);

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < patients.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <div className="p-4">
      {patients.length > 0 ? (
        <>
          <div className="mb-4 p-4 border">
            <h3 className="text-xl">{patients[currentIndex].name}</h3>
            <p>Queue Number: {patients[currentIndex].queueNumber}</p>
          </div>
          <div className="flex space-x-4">
            <button onClick={handlePrev} disabled={currentIndex === 0} className="bg-gray-500 text-white p-2">Prev</button>
            <button onClick={handleNext} disabled={currentIndex === patients.length - 1} className="bg-gray-500 text-white p-2">Next</button>
          </div>
        </>
      ) : (
        <p>No patients in the queue.</p>
      )}
    </div>
  );
};

export default PatientQueue;