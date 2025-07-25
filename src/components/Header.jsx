import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CalendarDays, Bell, User } from "lucide-react";
import logo from "../assets/logo.png";

const Header = () => {
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const profileRef = useRef(null);
  const navigate = useNavigate(); // 👈 Hook for navigation

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setShowProfileMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    // Optional: Clear auth/token here
    navigate("/login");
  };

  return (
    <header className="bg-[#0E9981] h-16 px-6 flex justify-between items-center shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="flex items-center space-x-3 px-2">
        <img src={logo} alt="Ventoutt Logo" className="h-10 w-10 rounded-full" />
        <span className="text-white text-xl font-semibold">Ventoutt</span>
      </div>

      <div className="flex items-center space-x-4">
        <div className="bg-gray-100 p-2 rounded-full cursor-pointer hover:opacity-80 transition">
          <CalendarDays className="text-black" size={20} />
        </div>
        <div className="bg-gray-100 p-2 rounded-full cursor-pointer hover:opacity-80 transition">
          <Bell className="text-black" size={20} />
        </div>

        <div className="relative" ref={profileRef}>
          <div
            className="bg-gray-100 p-2 rounded-full cursor-pointer hover:opacity-80 transition"
            onClick={() => setShowProfileMenu(!showProfileMenu)}
          >
            <User className="text-black" size={20} />
          </div>

          {showProfileMenu && (
            <div className="absolute right-0 mt-2 w-40 bg-white border rounded-md shadow-lg z-50">
              <button className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-sm text-gray-700">
                Profile
              </button>
              <button
                className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-sm text-red-600"
                onClick={handleLogout} // 👈 Navigate on logout
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
