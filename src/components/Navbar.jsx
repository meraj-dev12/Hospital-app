import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 flex justify-around items-center">
      <div className="text-white text-xl">Logo</div>
      <ul className="flex space-x-4">
        <li>
          <Link to="/" className="text-white border-teal-500">Patient List</Link>
        </li>
        <li>
          <Link to="/queue" className="text-white border-teal-500">Queue</Link>
        </li>
        <li>
          <Link to="/patient" className="text-white border-teal-500">Patient</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
