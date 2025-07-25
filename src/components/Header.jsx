import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CalendarDays, Bell, User } from "lucide-react";
import axios from "axios";
import logo from "../assets/logo.png";

const Header = () => {
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);

  const profileRef = useRef(null);
  const calendarRef = useRef(null);
  const notificationRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target))
        setShowProfileMenu(false);

      if (calendarRef.current && !calendarRef.current.contains(event.target))
        setShowCalendar(false);

      if (
        notificationRef.current &&
        !notificationRef.current.contains(event.target)
      )
        setShowNotifications(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = async () => {
    try {
      const token = localStorage.getItem("token");

      const response = await axios.post(
        "https://server1.pearl-developer.com/harshet/public/api/admin/admin-logout",
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.data.message === "Admin logged out successfully") {
        localStorage.removeItem("token");
        alert("Logout successful!");
        navigate("/login");
      } else {
        alert("Logout failed!");
      }
    } catch (error) {
      alert("Logout error: " + (error.response?.data?.message || "Server error"));
    }
  };

  return (
    <header className="bg-[#0E9981] h-16 px-6 flex justify-between items-center shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="flex items-center space-x-3 px-2">
        <img
          src={logo}
          alt="Ventoutt Logo"
          className="h-10 w-10 rounded-full"
        />
        <span className="text-white text-xl font-semibold">Ventoutt</span>
      </div>

      <div className="flex items-center space-x-4 relative">
        {/* Calendar Dropdown */}
        <div ref={calendarRef} className="relative">
          <div
            className="bg-gray-100 p-2 rounded-full cursor-pointer hover:opacity-80 transition"
            onClick={() => setShowCalendar(!showCalendar)}
          >
            <CalendarDays className="text-black" size={20} />
          </div>
          {showCalendar && (
            <div className="absolute right-0 mt-2 w-80 bg-white p-4 rounded-lg shadow-lg z-50">
              <h3 className="text-md font-semibold mb-3 text-gray-800">
                Availability Calendar
              </h3>

              {/* Date Picker */}
              <input
                type="date"
                className="w-full mb-3 rounded px-2 py-1 text-gray-700 shadow-inner border"
              />

              {/* Slot List */}
              <div className="space-y-2 max-h-60 overflow-y-auto">
                {[
                  { time: "10:00 AM", status: "available" },
                  { time: "11:00 AM", status: "not-available" },
                  { time: "12:00 PM", status: "available" },
                  { time: "01:00 PM", status: "double-booked" },
                  { time: "02:00 PM", status: "gap" },
                ].map((slot, index) => (
                  <div
                    key={index}
                    className={`flex justify-between items-center px-3 py-2 rounded-md text-sm ${
                      slot.status === "available"
                        ? "bg-green-100 text-green-700"
                        : slot.status === "not-available"
                        ? "bg-red-100 text-red-700"
                        : slot.status === "double-booked"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-blue-100 text-blue-700"
                    }`}
                  >
                    <span>{slot.time}</span>
                    <div className="flex items-center gap-2">
                      <span className="capitalize">
                        {slot.status.replace("-", " ")}
                      </span>
                      <button
                        className="text-xs bg-gray-800 text-white px-2 py-1 rounded hover:bg-gray-700"
                        onClick={() => alert(`Force closed ${slot.time}`)}
                      >
                        Force Close
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Notifications Dropdown */}
        <div ref={notificationRef} className="relative">
          <div
            className="bg-gray-100 p-2 rounded-full cursor-pointer hover:opacity-80 transition"
            onClick={() => setShowNotifications(!showNotifications)}
          >
            <Bell className="text-black" size={20} />
          </div>

          {showNotifications && (
            <div className="absolute right-0 mt-3 w-96 bg-white rounded-xl shadow-xl z-50 overflow-hidden">
              <div className="px-4 py-3 bg-[#f0fdfa] text-[#0E9981] font-semibold text-sm border-b">
                🔔 Notifications & Nudges
              </div>

              <div className="px-4 py-3 space-y-3 border-b bg-gray-50">
                <div className="grid grid-cols-2 gap-3">
                  <select className="text-sm border rounded px-3 py-2 focus:outline-none focus:ring-1 ring-[#0E9981]">
                    <option value="">Role</option>
                    <option value="therapist">Therapist</option>
                    <option value="listener">Listener</option>
                    <option value="client">Client</option>
                  </select>
                  <select className="text-sm border rounded px-3 py-2 focus:outline-none focus:ring-1 ring-[#0E9981]">
                    <option value="">Activity Level</option>
                    <option value="inactive">Inactive (7+ days)</option>
                    <option value="low">Low (1-2 sessions)</option>
                    <option value="active">Highly Active</option>
                  </select>
                </div>
              </div>

              <div className="max-h-52 overflow-y-auto text-sm divide-y">
                <div className="px-4 py-3 hover:bg-gray-50">
                  📩 <strong>Reminder sent</strong> to Therapist Anjali
                  (inactive)
                </div>
                <div className="px-4 py-3 hover:bg-gray-50">
                  ❌ <strong>Follow-up</strong> sent for cancelled session
                  (Client #91)
                </div>
                <div className="px-4 py-3 hover:bg-gray-50">
                  📢 <strong>Broadcast</strong> sent to all Listeners
                </div>
              </div>

              <div className="border-t px-4 py-3 bg-white">
                <textarea
                  rows={2}
                  className="w-full text-sm border rounded-md px-3 py-2 focus:outline-none focus:ring-1 ring-[#0E9981]"
                  placeholder="Write broadcast message..."
                ></textarea>
                <button
                  className="mt-2 w-full bg-[#0E9981] hover:bg-[#0b7f6e] text-white text-sm px-4 py-2 rounded-md transition"
                  onClick={() => alert("Broadcast message sent")}
                >
                  Send Broadcast
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Profile Dropdown */}
        <div className="relative" ref={profileRef}>
          <div
            className="bg-gray-100 p-2 rounded-full cursor-pointer hover:opacity-80 transition"
            onClick={() => setShowProfileMenu(!showProfileMenu)}
          >
            <User className="text-black" size={20} />
          </div>

          {showProfileMenu && (
            <div className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg z-50">
              <button className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-sm text-gray-700">
                Profile
              </button>
              <button
                className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-sm text-red-600"
                onClick={handleLogout}
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
