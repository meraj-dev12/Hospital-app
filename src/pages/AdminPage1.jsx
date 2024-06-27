import React from 'react';
import Navbar from '../components/Navbar';
import PatientForm from '../components/PatientForm';

const AdminPage1 = () => {
  return (
    <div>
      <Navbar />
      <h2 className="text-2xl p-4">Patient List</h2>
      <PatientForm />
    </div>
  );
};

export default AdminPage1;