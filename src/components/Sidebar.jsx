import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png'; // Your logo
import { ChevronDown, ChevronUp } from 'lucide-react';

const Sidebar = () => {
  const [managementOpen, setManagementOpen] = useState(false);

  const toggleManagement = () => {
    setManagementOpen(!managementOpen);
  };

  const activeClass =
    'block px-4 py-2 rounded-full bg-white text-black font-bold';
  const normalClass =
    'block px-4 py-2 text-white font-semibold hover:opacity-90';

  return (
    <aside className="w-64 min-h-screen bg-[#0E9981] px-4 py-6 text-white">
      {/* Logo and Title */}
      <div className="flex items-center mb-10 space-x-3">
        <img src={logo} alt="Ventoutt Logo" className="h-12 w-12 rounded-full" />
        <span className="text-2xl font-bold">Ventoutt</span>
      </div>

      {/* Sidebar Links */}
      <nav className="flex flex-col space-y-2">
        <NavLink
          to="/dashboard"
          className={({ isActive }) => (isActive ? activeClass : normalClass)}
        >
          Dashboard
        </NavLink>

        {/* Management Dropdown */}
        <button
          onClick={toggleManagement}
          className="flex items-center justify-between px-4 py-2 text-white hover:opacity-90 font-semibold w-full"
        >
          <span>Management</span>
          {managementOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </button>
        {managementOpen && (
          <div className="ml-4 space-y-1">
            <NavLink to="/therapists" className={normalClass}>Therapists</NavLink>
            <NavLink to="/listeners" className={normalClass}>Listeners</NavLink>
            <NavLink to="/clients" className={normalClass}>Clients</NavLink>
          </div>
        )}

        <NavLink to="/sessions" className={normalClass}>Sessions</NavLink>
        <NavLink to="/feedback" className={normalClass}>Feedback</NavLink>
        <NavLink to="/wallet" className={normalClass}>Wallet</NavLink>
        <NavLink to="/availability" className={normalClass}>Availability</NavLink>
        <NavLink to="/security" className={normalClass}>Security</NavLink>
        <NavLink to="/admin" className={normalClass}>Admin</NavLink>
        <NavLink to="/controls" className={normalClass}>Controls</NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
