import React from 'react';
import Navbar from '../components/Navbar';
import PatientQueue from '../components/PatientQueue';

const AdminPage2 = () => {
  return (
    <div>
      <Navbar />
      <h2 className="text-2xl p-4">Queue</h2>
      <PatientQueue />
    </div>
  );
};

export default AdminPage2;