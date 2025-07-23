import React from 'react';

const Security = () => {
  const consentLogs = [
    { id: 1, user: 'John Doe', acceptedOn: '2025-07-01', type: 'Privacy Policy' },
    { id: 2, user: 'Jane Smith', acceptedOn: '2025-06-25', type: 'Terms & Conditions' },
  ];

  const adminLogs = [
    { id: 1, admin: 'Admin A', action: 'Viewed Therapist Data', timestamp: '2025-07-20 14:00' },
    { id: 2, admin: 'Admin B', action: 'Deleted Client Account', timestamp: '2025-07-18 10:45' },
  ];

  return (
    <div className="p-6 bg-[#f9fafb] min-h-screen text-[#333]">
      <h2 className="text-2xl font-semibold mb-6">Security, Privacy & Compliance</h2>

      {/* Security Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="p-4 bg-white border border-gray-200 rounded">
          <h3 className="text-lg font-medium mb-1">SSL Certificate</h3>
          <p className="text-green-600">✔ HTTPS Secured</p>
        </div>
        <div className="p-4 bg-white border border-gray-200 rounded">
          <h3 className="text-lg font-medium mb-1">End-to-End Encryption</h3>
          <p className="text-green-600">✔ Chats & Calls Encrypted</p>
        </div>
      </div>

      {/* User Rights */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <div className="p-4 bg-white border border-gray-200 rounded">
          <h3 className="text-lg font-medium mb-3">Right to Be Forgotten</h3>
          <button className="px-4 py-2 bg-red-100 text-red-700 rounded hover:bg-red-200 transition">
            Delete All User Data
          </button>
        </div>
        <div className="p-4 bg-white border border-gray-200 rounded">
          <h3 className="text-lg font-medium mb-3">Right to Data Portability</h3>
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

      {/* Consent Logs */}
      <div className="mb-8">
        <h3 className="text-xl font-medium mb-2">Consent Logs</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 rounded">
            <thead className="bg-[#f0f4f8] text-sm text-gray-700">
              <tr>
                <th className="text-left px-4 py-2">User</th>
                <th className="text-left px-4 py-2">Accepted On</th>
                <th className="text-left px-4 py-2">Type</th>
              </tr>
            </thead>
            <tbody>
              {consentLogs.map((log) => (
                <tr key={log.id} className="border-t border-gray-100">
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
      <div className="mb-8">
        <h3 className="text-xl font-medium mb-2">Admin Activity Logs</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 rounded">
            <thead className="bg-[#f0f4f8] text-sm text-gray-700">
              <tr>
                <th className="text-left px-4 py-2">Admin</th>
                <th className="text-left px-4 py-2">Action</th>
                <th className="text-left px-4 py-2">Timestamp</th>
              </tr>
            </thead>
            <tbody>
              {adminLogs.map((log) => (
                <tr key={log.id} className="border-t border-gray-100">
                  <td className="px-4 py-2">{log.admin}</td>
                  <td className="px-4 py-2">{log.action}</td>
                  <td className="px-4 py-2">{log.timestamp}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Compliance Info */}
      <div className="flex items-center justify-between bg-[#eef2f6] p-4 border border-gray-200 rounded">
        <p className="text-sm text-gray-700">
          ✅ Platform is GDPR & CCPA Compliance Ready
        </p>
        <button className="text-sm text-blue-600 hover:underline">
          View Compliance Report
        </button>
      </div>
    </div>
  );
};

export default Security;
