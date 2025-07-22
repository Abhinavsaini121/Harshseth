import React from "react";
import { CalendarDays, Bell, User } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-[#0E9981] px-6 py-4 flex justify-end items-center shadow-md">
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
