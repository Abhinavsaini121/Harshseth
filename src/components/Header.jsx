import React from "react";
import { CalendarDays, Bell, User } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-[#0E9981] h-16 px-6 flex justify-end items-center shadow-md fixed top-0 left-0 right-0 z-50">
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
