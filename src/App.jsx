import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminPage1 from './pages/AdminPage1';
import AdminPage2 from './pages/AdminPage2';
import PatientPage from './pages/PatientPage';
import './index.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AdminPage1 />} />
        <Route path="/queue" element={<AdminPage2 />} />
        <Route path="/patient" element={<PatientPage />} />
      </Routes>
    </Router>
  );
};

export default App;