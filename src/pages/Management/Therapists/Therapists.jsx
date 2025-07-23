import React from "react";

const users = [
  {
    name: "Nento Misaein",
    role: "Gyootbin",
    status: "23 Due",
    timeAgo: "1 min ago",
    nav1: "2 - 4",
    nav2: "2.29",
    date: "22/10",
    img: "https://randomuser.me/api/portraits/men/10.jpg",
  },
  {
    name: "Cleonco Melaaed",
    role: "Efibday",
    status: "TEacisen",
    timeAgo: "25 min ago",
    nav1: "3 - 0",
    nav2: "4.29",
    date: "2/10",
    img: "https://randomuser.me/api/portraits/men/15.jpg",
  },
  {
    name: "Seentin Mmsiaby",
    role: "Eaborstzion",
    status: "20 Dew",
    timeAgo: "13 min ago",
    nav1: "2 - 0",
    nav2: "4.29",
    date: "12/10",
    img: "https://randomuser.me/api/portraits/women/16.jpg",
  },
  {
    name: "Meana Ext Alra",
    role: "QOT",
    status: "91 Oewr",
    timeAgo: "14 min ago",
    nav1: "3 - 4",
    nav2: "4.20",
    date: "22/24",
    img: "https://randomuser.me/api/portraits/women/12.jpg",
  },
  {
    name: "Ked ati HZ01420",
    role: "NSI?",
    status: "Phedfon",
    timeAgo: "16 min ago",
    nav1: "6 - 6",
    nav2: "21.20",
    date: "22.89",
    img: "https://randomuser.me/api/portraits/men/35.jpg",
  },
];

export default function AdminPanel() {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto bg-white p-6 rounded-lg shadow-md flex flex-col md:flex-row gap-6">
        {/* Left Table */}
        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-4">Admin Panel</h2>
          <div className="overflow-x-auto">
            <table className="w-full table-auto">
              <thead>
                <tr className="text-left text-sm font-semibold text-gray-500">
                  <th className="py-2">Name</th>
                  <th>Status</th>
                  <th>Role</th>
                  <th>Time</th>
                  <th>Nav 1</th>
                  <th>Nav 2</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {users.map((u, idx) => (
                  <tr key={idx} className="border-b text-sm">
                    <td className="flex items-center gap-3 py-3">
                      <img src={u.img} alt={u.name} className="w-8 h-8 rounded-full" />
                      <span>{u.name}</span>
                    </td>
                    <td className="text-green-600">{u.status}</td>
                    <td>{u.role}</td>
                    <td>{u.timeAgo}</td>
                    <td>{u.nav1}</td>
                    <td>{u.nav2}</td>
                    <td>{u.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="w-full md:w-1/3">
          <h3 className="text-xl font-bold mb-4">Accaithing</h3>

          {/* Calendar */}
          <div className="bg-gray-100 rounded-lg p-4 mb-4">
            <p className="text-sm font-semibold mb-2">PLOOFSCIFLE</p>
            <div className="grid grid-cols-7 gap-1 text-xs text-center text-gray-700">
              {[...Array(30)].map((_, i) => (
                <div
                  key={i}
                  className={`p-1 rounded ${
                    i === 16 ? "bg-blue-500 text-white" : "hover:bg-blue-100"
                  }`}
                >
                  {i + 1}
                </div>
              ))}
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-between mb-4">
            <button className="bg-blue-500 text-white px-4 py-1 rounded">Honlware</button>
            <button className="bg-gray-300 px-3 py-1 rounded">Pinet & Matsce</button>
          </div>

          {/* Actions */}
          <div>
            <p className="text-sm font-semibold mb-2">Actions</p>
            <div className="space-y-2 text-sm">
              <div className="bg-white p-2 rounded shadow-sm border">🛠️ Fames Roton DQtt</div>
              <div className="bg-white p-2 rounded shadow-sm border">🎁 Brikea Aulinenwolfe</div>
              <div className="bg-white p-2 rounded shadow-sm border">📂 Sto pille dibsvolian</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
