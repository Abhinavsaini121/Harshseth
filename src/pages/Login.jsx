import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import logo from "../assets/logo.png";
import lady from "../assets/lady.png";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        "https://server1.pearl-developer.com/harshet/public/api/admin/admin_login",
        { email, password }
      );

      if (response.data.success) {
        toast.success("Login successful!", {
          position: "top-center",
        });

        localStorage.setItem("token", response.data.token);

        setTimeout(() => {
          navigate("/dashboard");
        }, 1500); // delay for toast
      } else {
        toast.error("Login failed. Please check your credentials.", {
          position: "top-center",
        });
      }
    } catch (error) {
      toast.error("Login error: " + (error.response?.data?.message || "Server error"), {
        position: "top-center",
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#08998D] px-4">
      <ToastContainer />
      <div className="bg-white w-full max-w-4xl rounded-xl shadow-lg flex overflow-hidden relative">
        {/* Left Side: Form */}
        <div className="w-full md:w-2/3 p-8 md:p-10">
          <div className="flex items-center space-x-3 mb-6">
            <img src={logo} alt="Ventoutt Logo" className="w-10 h-10 rounded-full" />
            <h1 className="text-2xl font-bold text-[#08998D]">Ventoutt</h1>
          </div>

          <h2 className="text-xl font-semibold mb-6 text-gray-800">Log In</h2>

          {/* Email Input */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              placeholder="Enter Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#08998D]"
            />
          </div>

          {/* Password Input */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#08998D]"
            />
          </div>

          <button
            onClick={handleLogin}
            className="bg-black text-white w-full py-2 rounded hover:bg-gray-800 transition"
          >
            Log In
          </button>

          <div className="text-sm text-center mt-4 text-gray-600">
            <p className="hover:underline cursor-pointer mb-1">Forgot username or password?</p>
            <p className="hover:underline cursor-pointer">Create new account</p>
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="hidden md:block w-1/3 bg-transparent relative">
          <img
            src={lady}
            alt="lady"
            className="absolute bottom-0 right-0 h-[90%] object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
