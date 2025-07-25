import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // 👉 Perform actual login validation/API call here
    // If login is successful:
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-semibold mb-6 text-center">Login to Ventoutt</h2>
        <input
          type="text"
          placeholder="Email"
          className="w-full p-2 mb-4 border rounded"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 mb-6 border rounded"
        />
        <button
          onClick={handleLogin}
          className="w-full bg-[#0E9981] text-white py-2 rounded hover:bg-[#0c826f] transition"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
