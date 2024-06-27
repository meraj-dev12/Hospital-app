import React, { useState } from 'react';
import axios from '../api/axios';  // Import the Axios instance

const PatientForm = () => {
  const [name, setName] = useState('');
  const [queueNumber, setQueueNumber] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('/api/patients', { name, queueNumber });
    setName('');
    setQueueNumber('');
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <input
        type="text"
        placeholder="Patient Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-2 mb-2 w-full"
      />
      <input
        type="text"
        placeholder="Queue Number"
        value={queueNumber}
        onChange={(e) => setQueueNumber(e.target.value)}
        className="border p-2 mb-2 w-full"
      />
      <button type="submit" className="bg-blue-500 text-white p-2 w-full">Add Patient</button>
    </form>
  );
};

export default PatientForm;