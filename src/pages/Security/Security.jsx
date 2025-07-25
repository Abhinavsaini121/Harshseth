import React, { useState } from 'react';

const Security = () => {
  const [newUser, setNewUser] = useState({ name: '', type: '', acceptedOn: '' });
  const [consentLogs, setConsentLogs] = useState([
    { id: 1, user: 'John Doe', acceptedOn: '2025-07-01', type: 'Privacy Policy' },
    { id: 2, user: 'Jane Smith', acceptedOn: '2025-06-25', type: 'Terms & Conditions' },
  ]);

  const adminLogs = [
    { id: 1, admin: 'Admin A', action: 'Viewed Therapist Data', timestamp: '2025-07-20 14:00' },
    { id: 2, admin: 'Admin B', action: 'Deleted Client Account', timestamp: '2025-07-18 10:45' },
  ];

  const handleAddConsent = () => {
    if (newUser.name && newUser.type && newUser.acceptedOn) {
      const newEntry = {
        id: consentLogs.length + 1,
        user: newUser.name,
        type: newUser.type,
        acceptedOn: newUser.acceptedOn,
      };
      setConsentLogs([...consentLogs, newEntry]);
      setNewUser({ name: '', type: '', acceptedOn: '' });
    }
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen text-gray-800 space-y-10">
      <h2 className="text-2xl font-semibold mb-6">Security, Privacy & Compliance</h2>

      {/* SSL & Encryption */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow-md">
          <h3 className="text-lg font-semibold">🔐 SSL Certificate</h3>
          <p className="text-green-600 mt-2">✔ HTTPS Secured</p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-md">
          <h3 className="text-lg font-semibold">🛡 End-to-End Encryption</h3>
          <p className="text-green-600 mt-2">✔ Chats & Calls Encrypted</p>
        </div>
      </div>

      {/* User Rights */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow-md">
          <h3 className="text-lg font-semibold mb-3">🗑 Right to Be Forgotten</h3>
          <button className="px-4 py-2 bg-red-100 text-red-700 rounded hover:bg-red-200 transition">
            Delete All User Data
          </button>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-md">
          <h3 className="text-lg font-semibold mb-3">📦 Right to Data Portability</h3>
          <div className="space-x-2">
            <button className="px-4 py-2 bg-blue-100 text-blue-700 rounded hover:bg-blue-200 transition">
              Export as CSV
            </button>
            <button className="px-4 py-2 bg-green-100 text-green-700 rounded hover:bg-green-200 transition">
              Export as JSON
            </button>
          </div>
        </div>
      </div>

      {/* ➕ Add Consent Entry */}
      <div className="bg-white p-6 rounded-2xl shadow-md">
        <h3 className="text-lg font-semibold mb-4">➕ Add Consent for a User</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <input
            type="text"
            placeholder="User Name"
            className="p-2 border border-gray-300 rounded"
            value={newUser.name}
            onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
          />
          <input
            type="text"
            placeholder="Consent Type"
            className="p-2 border border-gray-300 rounded"
            value={newUser.type}
            onChange={(e) => setNewUser({ ...newUser, type: e.target.value })}
          />
          <input
            type="date"
            className="p-2 border border-gray-300 rounded"
            value={newUser.acceptedOn}
            onChange={(e) => setNewUser({ ...newUser, acceptedOn: e.target.value })}
          />
        </div>
        <button
          className="px-6 py-2 bg-[#0E9981] text-white rounded hover:bg-[#0c826f] transition"
          onClick={handleAddConsent}
        >
          Add Consent
        </button>
      </div>

      {/* Consent Logs Table */}
      <div className="bg-white p-6 rounded-2xl shadow-md">
        <h3 className="text-xl font-semibold mb-4">📜 Consent Logs</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead className="bg-gray-100 text-gray-700">
              <tr>
                <th className="text-left px-4 py-2">User</th>
                <th className="text-left px-4 py-2">Accepted On</th>
                <th className="text-left px-4 py-2">Type</th>
              </tr>
            </thead>
            <tbody>
              {consentLogs.map((log) => (
                <tr key={log.id} className="border-t border-gray-200 hover:bg-gray-50">
                  <td className="px-4 py-2">{log.user}</td>
                  <td className="px-4 py-2">{log.acceptedOn}</td>
                  <td className="px-4 py-2">{log.type}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Admin Activity Logs */}
      <div className="bg-white p-6 rounded-2xl shadow-md">
        <h3 className="text-xl font-semibold mb-4">🧾 Admin Activity Logs</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead className="bg-gray-100 text-gray-700">
              <tr>
                <th className="text-left px-4 py-2">Admin</th>
                <th className="text-left px-4 py-2">Action</th>
                <th className="text-left px-4 py-2">Timestamp</th>
              </tr>
            </thead>
            <tbody>
              {adminLogs.map((log) => (
                <tr key={log.id} className="border-t border-gray-200 hover:bg-gray-50">
                  <td className="px-4 py-2">{log.admin}</td>
                  <td className="px-4 py-2">{log.action}</td>
                  <td className="px-4 py-2">{log.timestamp}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Compliance */}
      <div className="flex items-center justify-between bg-gray-100 p-4 rounded-2xl shadow-sm">
        <p className="text-sm text-gray-700">✅ Platform is GDPR & CCPA Compliant</p>
        <button className="text-sm text-blue-600 hover:underline">View Compliance Report</button>
      </div>
    </div>
  );
};

export default Security;
