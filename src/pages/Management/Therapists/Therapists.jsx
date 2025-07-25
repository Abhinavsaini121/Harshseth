import React from "react";
import { CalendarDays, MoreVertical } from "lucide-react";

const therapists = [
  {
    name: "Dr. Anjali Sharma",
    status: "active",
    specialty: "Anxiety",
    lastLogin: "2 hours ago",
    sessions: { daily: 3, weekly: 12, monthly: 40 },
    avgDuration: "45 mins",
    rating: 4.7,
  },
  {
    name: "Dr. Mohit Mehra",
    status: "inactive",
    specialty: "Couples Therapy",
    lastLogin: "5 days ago",
    sessions: { daily: 0, weekly: 0, monthly: 5 },
    avgDuration: "50 mins",
    rating: 4.2,
  },
];

const Therapist = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Therapist Management</h2>

      {/* Filters */}
      <div className="flex flex-wrap gap-4 mb-6">
        <input
          type="text"
          placeholder="Search Therapist..."
          className="border px-3 py-2 rounded-md w-60"
        />
        <select className="border px-3 py-2 rounded-md">
          <option>Status: All</option>
          <option>Active</option>
          <option>Inactive</option>
        </select>
        <select className="border px-3 py-2 rounded-md">
          <option>Specialty</option>
          <option>Anxiety</option>
          <option>Couples Therapy</option>
        </select>
      </div>

      {/* Therapist Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow rounded-lg">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-3 text-left">Therapist</th>
              <th className="px-4 py-3 text-left">Status</th>
              <th className="px-4 py-3 text-left">Specialty</th>
              <th className="px-4 py-3 text-left">Last Login</th>
              <th className="px-4 py-3 text-left">Sessions</th>
              <th className="px-4 py-3 text-left">Avg. Duration</th>
              <th className="px-4 py-3 text-left">Rating</th>
              <th className="px-4 py-3 text-left">Availability</th>
              <th className="px-4 py-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {therapists.map((therapist, index) => (
              <tr key={index} className="border-t hover:bg-gray-50">
                <td className="px-4 py-3">{therapist.name}</td>
                <td className="px-4 py-3">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      therapist.status === "active"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {therapist.status}
                  </span>
                </td>
                <td className="px-4 py-3">{therapist.specialty}</td>
                <td className="px-4 py-3">{therapist.lastLogin}</td>
                <td className="px-4 py-3">
                  D:{therapist.sessions.daily} / W:{therapist.sessions.weekly} / M:{therapist.sessions.monthly}
                </td>
                <td className="px-4 py-3">{therapist.avgDuration}</td>
                <td className="px-4 py-3">⭐ {therapist.rating}</td>
                <td className="px-4 py-3">
                  <button className="flex items-center text-sm text-blue-600 hover:underline">
                    <CalendarDays className="w-4 h-4 mr-1" /> View
                  </button>
                </td>
                <td className="px-4 py-3">
                  <button className="p-1 hover:bg-gray-100 rounded-full">
                    <MoreVertical className="w-4 h-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Therapist;