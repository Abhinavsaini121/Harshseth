import React, { useState } from "react";
import { NavLink } from "react-router-dom";
// import logo from "../assets/logo.png";
import { ChevronDown, ChevronUp, Menu } from "lucide-react";

const Sidebar = () => {
  const [managementOpen, setManagementOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleManagement = () => setManagementOpen(!managementOpen);
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const activeClass =
    "block px-4 py-2 rounded-full bg-white text-black font-bold transition";
  const normalClass =
    "block px-4 py-2 text-white font-semibold hover:opacity-90 transition";

  return (
    <>
      {/* Mobile Hamburger Button */}
      <div className="md:hidden fixed top-4 left-4 z-10">
        <button
          onClick={toggleSidebar}
          className="text-white bg-[#0E9981] p-2 rounded-full shadow-lg focus:outline-none"
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`${
          isSidebarOpen ? "block" : "hidden"
        } md:block fixed top-0 left-0 h-full w-64 bg-[#0E9981] px-4 py-6 text-white z-1 pt-20 transition-all duration-300`}
      >
        {/* Logo */}
        {/* <div className="flex items-center mb-10 space-x-3 px-2">
          <img
            src={logo}
            alt="Ventoutt Logo"
            className="h-10 w-10 rounded-full"
          />
          <span className="text-2xl font-bold">Ventoutt</span>
        </div> */}

        {/* Navigation Links */}
        <nav className="flex flex-col space-y-2">
          <NavLink
            to="/dashboard"
            end 
            className={({ isActive }) => (isActive ? activeClass : normalClass)}
          >
            Dashboard
          </NavLink>

          {/* Management Dropdown */}
          <button
            onClick={toggleManagement}
            className="flex items-center justify-between px-4 py-2 text-white font-semibold hover:opacity-90 w-full focus:outline-none"
          >
            <span>Management</span>
            {managementOpen ? (
              <ChevronUp size={18} />
            ) : (
              <ChevronDown size={18} />
            )}
          </button>

          {managementOpen && (
            <div className="ml-4 space-y-1">
              <NavLink to="/dashboard/therapists" className={normalClass}>
                Therapists
              </NavLink>
              <NavLink to="/dashboard/listeners" className={normalClass}>
                Listeners
              </NavLink>
              <NavLink to="/dashboard/clients" className={normalClass}>
                Clients
              </NavLink>
            </div>
          )}

          <NavLink
            to="/dashboard/sessions"
            className={({ isActive }) => (isActive ? activeClass : normalClass)}
          >
            Sessions
          </NavLink>
          {/* <NavLink
            to="/feedback"
            className={({ isActive }) => (isActive ? activeClass : normalClass)}
          >
            Feedback
          </NavLink> */}
          <NavLink
            to="/dashboard/wallet"
            className={({ isActive }) => (isActive ? activeClass : normalClass)}
          >
            Wallet
          </NavLink>
        
          <NavLink
            to="/dashboard/security"
            className={({ isActive }) => (isActive ? activeClass : normalClass)}
          >
            Security
          </NavLink>
          <NavLink
            to="/dashboard/admin"
            className={({ isActive }) => (isActive ? activeClass : normalClass)}
          >
            Admin
          </NavLink>

          <NavLink
            to="/dashboard/faq"
            className={({ isActive }) => (isActive ? activeClass : normalClass)}
          >
            F&Q
          </NavLink>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
