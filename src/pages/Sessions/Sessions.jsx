import React, { useState } from 'react';

const Sessions = () => {
  const [filter, setFilter] = useState('All');

  const sessions = [
    {
      id: 1,
      date: '2025-07-21',
      therapist: 'Dr. Aditi Sharma',
      status: 'Upcoming',
      duration: '30 mins',
      notesPending: false,
    },
    {
      id: 2,
      date: '2025-07-19',
      therapist: 'Listener Rahul',
      status: 'Missed',
      duration: '0 mins',
      notesPending: true,
    },
    {
      id: 3,
      date: '2025-07-18',
      therapist: 'Dr. Meera Kapoor',
      status: 'Completed',
      duration: '45 mins',
      notesPending: false,
    },
    {
      id: 4,
      date: '2025-07-17',
      therapist: 'Listener Kavita',
      status: 'Cancelled',
      duration: '0 mins',
      notesPending: false,
    },
  ];

  const filteredSessions =
    filter === 'All' ? sessions : sessions.filter((s) => s.status === filter);

  const avgDuration =
    sessions
      .filter((s) => s.duration !== '0 mins')
      .reduce((total, s) => total + parseInt(s.duration), 0) /
    sessions.filter((s) => s.duration !== '0 mins').length;

  const missedSessions = sessions.filter((s) => s.status === 'Missed').length;
  const pendingNotes = sessions.filter((s) => s.notesPending).length;

  return (
    <div className="p-6 bg-[#F5F7FA] min-h-screen text-gray-800">
      <h2 className="text-xl font-medium mb-4">Session Management</h2>

      {/* Filter Buttons */}
      <div className="mb-5 flex gap-3 flex-wrap">
        {['All', 'Upcoming', 'Missed', 'Completed', 'Cancelled'].map((status) => (
          <button
            key={status}
            onClick={() => setFilter(status)}
            className={`px-4 py-1.5 border rounded-md text-sm font-medium transition ${
              filter === status
                ? 'bg-[#E8F0FE] text-blue-600 border-blue-300'
                : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'
            }`}
          >
            {status}
          </button>
        ))}
      </div>

      {/* Table */}
      <div className="overflow-x-auto bg-white rounded-lg border border-gray-200 shadow-sm">
        <table className="min-w-full text-sm">
          <thead className="bg-[#F9FAFB] text-gray-700 font-medium">
            <tr>
              <th className="text-left px-4 py-2">Date</th>
              <th className="text-left px-4 py-2">Therapist/Listener</th>
              <th className="text-left px-4 py-2">Status</th>
              <th className="text-left px-4 py-2">Duration</th>
              <th className="text-left px-4 py-2">Notes Pending</th>
            </tr>
          </thead>
          <tbody>
            {filteredSessions.map((s) => (
              <tr key={s.id} className="border-t border-gray-100 hover:bg-[#FAFAFA]">
                <td className="px-4 py-2">{s.date}</td>
                <td className="px-4 py-2">{s.therapist}</td>
                <td className="px-4 py-2">{s.status}</td>
                <td className="px-4 py-2">{s.duration}</td>
                <td className="px-4 py-2">
                  {s.notesPending ? (
                    <span className="text-red-500">Yes</span>
                  ) : (
                    'No'
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
        <div className="bg-white border border-gray-200 p-4 rounded-lg shadow-sm">
          <p className="text-sm text-gray-600 mb-1">Avg. Session Duration</p>
          <p className="text-base font-medium">
            {isNaN(avgDuration) ? '0' : Math.round(avgDuration)} mins
          </p>
        </div>
        <div className="bg-white border border-gray-200 p-4 rounded-lg shadow-sm">
          <p className="text-sm text-gray-600 mb-1">Missed Sessions</p>
          <p className="text-base font-medium">{missedSessions}</p>
        </div>
        <div className="bg-white border border-gray-200 p-4 rounded-lg shadow-sm">
          <p className="text-sm text-gray-600 mb-1">Sessions with Pending Notes</p>
          <p className="text-base font-medium">{pendingNotes}</p>
        </div>
      </div>

      {/* Download Reports */}
      <div className="mt-6">
        <button className="px-4 py-2 bg-[#E6F4EA] border border-green-300 rounded-md text-green-700 text-sm font-medium hover:bg-[#d6eddc] transition">
          Download Session Reports
        </button>
      </div>
    </div>
  );
};

export default Sessions;
