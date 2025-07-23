import React from "react";
import { CalendarDays, Bell, User } from "lucide-react";
import logo from "../assets/logo.png"; // 👈 Ensure logo is correctly imported

const Header = () => {
  return (
    <header className="bg-[#0E9981] h-16 px-6 flex justify-between items-center shadow-md fixed top-0 left-0 right-0 z-50">
      {/* Logo Section (Left) */}
      <div className="flex items-center space-x-3 px-2">
        <img
          src={logo}
          alt="Ventoutt Logo"
          className="h-10 w-10 rounded-full"
        />
        <span className="text-white text-xl font-bold">Ventoutt</span>
      </div>

      {/* Icons Section (Right) */}
      <div className="flex items-center space-x-4">
        <div className="bg-gray-200 p-2 rounded-full cursor-pointer hover:opacity-80 transition">
          <CalendarDays className="text-black" size={20} />
        </div>
        <div className="bg-gray-200 p-2 rounded-full cursor-pointer hover:opacity-80 transition">
          <Bell className="text-black" size={20} />
        </div>
        <div className="bg-gray-200 p-2 rounded-full cursor-pointer hover:opacity-80 transition">
          <User className="text-black" size={20} />
        </div>
      </div>
    </header>
  );
};

export default Header;
