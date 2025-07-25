import React, { useState } from 'react';

const Clients = () => {
  const [clients, setClients] = useState([
    {
      id: 1,
      name: 'Rahul Sharma',
      lastSession: '2025-07-20',
      inactiveDays: 3,
      feedback: 'Very productive session!',
    },
    {
      id: 2,
      name: 'Pooja Verma',
      lastSession: '2025-07-10',
      inactiveDays: 13,
      feedback: 'Needs improvement',
    },
  ]);

  const handleDeactivate = (id) => {
    alert(`Client ${id} deactivated.`);
  };

  const handleExport = (id) => {
    alert(`Session history exported for client ${id}.`);
  };

  const handleFlag = (id) => {
    alert(`Client ${id} flagged.`);
  };

  const handleRemind = (id) => {
    alert(`Reminder sent to client ${id}.`);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-6">Client Management</h2>

      <div className="overflow-x-auto rounded-lg shadow">
        <table className="min-w-full divide-y divide-gray-200 bg-white">
          <thead className="bg-gray-100 text-gray-700 text-left">
            <tr>
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Last Session</th>
              <th className="px-4 py-3">Inactive (Days)</th>
              <th className="px-4 py-3">Feedback</th>
              <th className="px-4 py-3">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 text-sm">
            {clients.map((client) => (
              <tr key={client.id}>
                <td className="px-4 py-3 font-medium">{client.name}</td>
                <td className="px-4 py-3">{client.lastSession}</td>
                <td className="px-4 py-3">
                  {client.inactiveDays > 7 ? (
                    <span className="text-red-600 font-semibold">{client.inactiveDays} days</span>
                  ) : (
                    <span>{client.inactiveDays} days</span>
                  )}
                </td>
                <td className="px-4 py-3">{client.feedback}</td>
                <td className="px-4 py-3">
                  <div className="flex flex-wrap gap-2">
                    <button
                      onClick={() => handleDeactivate(client.id)}
                      className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                    >
                      Deactivate
                    </button>
                    <button
                      onClick={() => handleExport(client.id)}
                      className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded"
                    >
                      Export
                    </button>
                    <button
                      onClick={() => handleFlag(client.id)}
                      className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded"
                    >
                      Flag
                    </button>
                    <button
                      onClick={() => handleRemind(client.id)}
                      className="bg-gray-500 hover:bg-gray-600 text-white px-3 py-1 rounded"
                    >
                      Remind
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Clients;
