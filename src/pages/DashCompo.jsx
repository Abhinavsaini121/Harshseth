import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
} from "recharts";

export default function DashCompo() {
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#A28EFF', '#FF6384'];

  // Total sessions data
  const sessionsData = [
    { period: "Daily", sessions: 35 },
    { period: "Weekly", sessions: 200 },
    { period: "Monthly", sessions: 780 },
  ];

  // Active users
  const activeUsers = [
    { name: "Therapists", value: 12 },
    { name: "Listeners", value: 25 },
    { name: "Clients", value: 110 },
  ];

  // Upcoming Sessions
  const upcomingSessions = [
    { label: "Today", count: 8 },
    { label: "Tomorrow", count: 14 },
  ];

  // Missed / Cancelled
  const missedCancelled = [
    { label: "Missed", count: 3 },
    { label: "Cancelled", count: 4 },
  ];

  // Inactive Users
  const inactiveUsers = [
    { days: "7 days", count: 5 },
    { days: "14 days", count: 12 },
    { days: "30 days", count: 20 },
  ];

  // Ratings
  const avgRating = 4.3;
  const ratingsBreakdown = [
    { name: "Therapists", value: 4.5 },
    { name: "Listeners", value: 4.1 },
  ];

  return (
    <div className="p-6 bg-white">
      <h1 className="text-2xl font-bold mb-6">Dashboard Overview</h1>
      
      {/* Total Sessions */}
      <div className="bg-gray-50 p-4 rounded-xl shadow mb-6">
        <h2 className="text-lg font-semibold mb-2">Total Sessions</h2>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={sessionsData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="period" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="sessions" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Active Users */}
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div className="bg-gray-50 p-4 rounded-xl shadow">
          <h2 className="text-lg font-semibold mb-2">Active Users</h2>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie data={activeUsers} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} label>
                {activeUsers.map((entry, index) => (
                  <Cell key={index} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Upcoming Sessions */}
        <div className="bg-gray-50 p-4 rounded-xl shadow">
          <h2 className="text-lg font-semibold mb-2">Upcoming Sessions</h2>
          <ul className="space-y-2 text-base">
            {upcomingSessions.map((item, index) => (
              <li key={index} className="flex justify-between">
                <span>{item.label}</span>
                <span className="font-medium">{item.count}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Missed + Inactive */}
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div className="bg-gray-50 p-4 rounded-xl shadow">
          <h2 className="text-lg font-semibold mb-2">Missed / Cancelled Sessions</h2>
          <ul className="space-y-2 text-base">
            {missedCancelled.map((item, index) => (
              <li key={index} className="flex justify-between">
                <span>{item.label}</span>
                <span className="font-medium">{item.count}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-gray-50 p-4 rounded-xl shadow">
          <h2 className="text-lg font-semibold mb-2">Inactive Users</h2>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={inactiveUsers}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="days" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="count" stroke="#FF8042" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Sessions Pending Notes + Ratings */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-gray-50 p-4 rounded-xl shadow">
          <h2 className="text-lg font-semibold mb-2">Sessions Pending Notes</h2>
          <p className="text-xl font-bold">7</p>
        </div>

        <div className="bg-gray-50 p-4 rounded-xl shadow">
          <h2 className="text-lg font-semibold mb-2">Ratings Overview</h2>
          <p className="text-sm mb-1">Average Satisfaction Score:</p>
          <p className="text-2xl font-bold mb-3">{avgRating}</p>
          <ul className="space-y-1 text-base">
            {ratingsBreakdown.map((item, index) => (
              <li key={index} className="flex justify-between">
                <span>{item.name}</span>
                <span>{item.value}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
