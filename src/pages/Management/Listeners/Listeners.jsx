import React, { useState } from "react";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { MdSettingsBackupRestore } from "react-icons/md";
import { FiUserCheck, FiUserX, FiEye } from "react-icons/fi";

const mockListeners = [
  {
    id: 1,
    name: "Riya Mehta",
    status: "active",
    experience: "2 years",
    lastLogin: "2025-07-22 09:45 AM",
    sessionHistory: 54,
    avgDuration: "42 min",
    feedback: "Rated 4.5/5 across 120 reviews",
    slots: ["Mon 2–4 PM", "Wed 10–12 AM", "Fri 5–7 PM"],
  },
  {
    id: 2,
    name: "Aman Sharma",
    status: "inactive",
    experience: "1 year",
    lastLogin: "2025-07-20 06:10 PM",
    sessionHistory: 21,
    avgDuration: "36 min",
    feedback: "Rated 4.1/5 across 40 reviews",
    slots: ["Tue 11–1 PM", "Thu 4–6 PM"],
  },
];

const Listeners = () => {
  const [listeners, setListeners] = useState(mockListeners);

  const toggleStatus = (id) => {
    setListeners((prev) =>
      prev.map((listener) =>
        listener.id === id
          ? {
              ...listener,
              status: listener.status === "active" ? "inactive" : "active",
            }
          : listener
      )
    );
  };

  const approveOnboarding = (id) => {
    alert(`Listener ${id} approved`);
  };

  const rejectOnboarding = (id) => {
    alert(`Listener ${id} rejected`);
  };

  const resetCredentials = (id) => {
    alert(`Reset credentials for Listener ${id}`);
  };

  const viewPerformance = (id) => {
    alert(`View performance of Listener ${id}`);
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">🎧 Listener Management</h1>
      <div className="grid gap-6">
        {listeners.map((listener) => (
          <div
            key={listener.id}
            className="bg-white shadow-md rounded-2xl p-6 border hover:shadow-lg transition-all"
          >
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-semibold text-gray-800">
                  {listener.name}{" "}
                  <span
                    className={`ml-2 px-2 py-1 text-sm rounded-full ${
                      listener.status === "active"
                        ? "bg-green-100 text-green-600"
                        : "bg-red-100 text-red-600"
                    }`}
                  >
                    {listener.status}
                  </span>
                </h2>
                <p className="text-gray-500 text-sm mt-1">
                  Experience: {listener.experience || "N/A"}
                </p>
                <p className="text-gray-500 text-sm">Last Login: {listener.lastLogin}</p>
                <p className="text-gray-500 text-sm">Sessions: {listener.sessionHistory}</p>
                <p className="text-gray-500 text-sm">Avg. Duration: {listener.avgDuration}</p>
                <p className="text-gray-500 text-sm">Feedback: {listener.feedback}</p>
                <p className="text-gray-500 text-sm mt-1">
                  <span className="font-semibold text-gray-600">Availability:</span>{" "}
                  {listener.slots.join(", ")}
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <button
                  onClick={() => approveOnboarding(listener.id)}
                  className="flex items-center gap-2 bg-blue-100 text-blue-700 px-3 py-1 rounded hover:bg-blue-200"
                >
                  <FaCheckCircle /> Approve
                </button>
                <button
                  onClick={() => rejectOnboarding(listener.id)}
                  className="flex items-center gap-2 bg-yellow-100 text-yellow-700 px-3 py-1 rounded hover:bg-yellow-200"
                >
                  <FaTimesCircle /> Reject
                </button>
                <button
                  onClick={() => viewPerformance(listener.id)}
                  className="flex items-center gap-2 bg-purple-100 text-purple-700 px-3 py-1 rounded hover:bg-purple-200"
                >
                  <FiEye /> Performance
                </button>
                <button
                  onClick={() => toggleStatus(listener.id)}
                  className="flex items-center gap-2 bg-gray-100 text-gray-700 px-3 py-1 rounded hover:bg-gray-200"
                >
                  {listener.status === "active" ? (
                    <>
                      <FiUserX /> Deactivate
                    </>
                  ) : (
                    <>
                      <FiUserCheck /> Activate
                    </>
                  )}
                </button>
                <button
                  onClick={() => resetCredentials(listener.id)}
                  className="flex items-center gap-2 bg-red-100 text-red-700 px-3 py-1 rounded hover:bg-red-200"
                >
                  <MdSettingsBackupRestore /> Reset
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Listeners;
