import React from 'react';
import CurrentPatient from '../components/CurrentPatient';

const PatientPage = () => {
  return (
    <div>
      <h2 className="text-2xl p-4">Current Patient</h2>
      <CurrentPatient />
    </div>
  );
};

export default PatientPage;