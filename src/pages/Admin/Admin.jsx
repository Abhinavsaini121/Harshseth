import React from 'react';

const Admin = () => {
  const roles = [
    {
      id: 1,
      name: 'Super Admin',
      access: 'Full access to all features and settings',
    },
    {
      id: 2,
      name: 'Ops/Admin',
      access: 'Limited access to reports and user management',
    },
  ];

  return (
    <div className="p-6 bg-[#f9fafb] min-h-screen text-[#333]">
      <h2 className="text-2xl font-semibold mb-6">Admin Access & Controls</h2>

      {/* Roles Section */}
      <div className="mb-8">
        <h3 className="text-xl font-medium mb-3">Roles</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {roles.map((role) => (
            <div key={role.id} className="p-4 bg-white border border-gray-200 rounded shadow-sm">
              <h4 className="text-lg font-semibold text-gray-800">{role.name}</h4>
              <p className="text-sm text-gray-600 mt-1">{role.access}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Two-Factor Authentication */}
      <div className="mb-8">
        <h3 className="text-xl font-medium mb-3">Two-Factor Authentication (2FA)</h3>
        <div className="p-4 bg-white border border-gray-200 rounded flex items-center justify-between">
          <p className="text-sm text-gray-700">
            Enhance login security with an additional verification step.
          </p>
          <button className="px-4 py-2 bg-blue-100 text-blue-700 rounded hover:bg-blue-200 transition">
            Manage 2FA Settings
          </button>
        </div>
      </div>

      {/* Password Options */}
      <div>
        <h3 className="text-xl font-medium mb-3">Password Options</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-white border border-gray-200 rounded">
            <h4 className="text-md font-semibold text-gray-800 mb-2">Change Password</h4>
            <button className="px-4 py-2 bg-green-100 text-green-700 rounded hover:bg-green-200 transition">
              Change Password
            </button>
          </div>
          <div className="p-4 bg-white border border-gray-200 rounded">
            <h4 className="text-md font-semibold text-gray-800 mb-2">Reset Password</h4>
            <button className="px-4 py-2 bg-yellow-100 text-yellow-700 rounded hover:bg-yellow-200 transition">
              Reset User Password
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
