// src/pages/Dashboard.jsx
import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import DashCompo from "./DashCompo";

const Dashboard = () => {
  const navigation = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      navigation("/DashCompo");
    }
  }, [navigation, token]);

  return (
 <div className="flex h-screen">
  {/* Sidebar fixed at left, full height */}
  <div className="w-[250px] flex-shrink-0 z-10">
    <Sidebar />
  </div>

  {/* Right side content (header + main) */}
  <div className="flex flex-col flex-1">
    {/* Header stays at top */}
    <Header />

    {/* Main Content below header */}
    <main className="flex-1 overflow-y-auto p-4 mt-16">
      <Outlet />
    </main>
  </div>
</div>

  );
};

export default Dashboard;
