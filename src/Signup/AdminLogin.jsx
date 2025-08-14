import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function AdminLogin() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    e.preventDefault();
    console.log("Login Data:" , formData);
    setFormData({ ...formData, [e.target.name]: e.target.value });

    navigate("/studentdashboard"); // Redirect to Student Dashboard after login

  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Data:", formData);
    // Your login logic here
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0D0B1F] px-4 font-sans">
      <form
        onSubmit={handleSubmit}
        className="bg-gradient-to-br from-[#2c003e] via-[#3b0a58] to-[#1a1a1a] p-8 sm:p-8 rounded-2xl shadow-lg w-full max-w-sm sm:max-w-md"
      >
        <h2 className="text-xl sm:text-2xl font-baskerville text-white mb-6 text-center">
          Admin Login
        </h2>

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          className="w-full mb-4 px-4 py-2 rounded font-baskerville bg-white/20 text-white outline-none focus:ring-2 focus:ring-pink-500"
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="w-full mb-6 px-4 py-2 rounded  bg-white/20 text-white outline-none focus:ring-2 focus:ring-pink-500"
          required
        />

        <button
          type="submit"
          className="w-full bg-gradient-to-br from-purple-900 via-purple-600 to-purple-300 text-black py-2 font-baskerville rounded transition " 
        >
          Login
        </button>

        <p className="text-gray-400 text-sm mt-4 text-center font-baskerville">
          Don’t have an account?{" "}
      <Link to="/adminsignup" className="text-pink-500 hover:underline font-baskerville">Sign Up</Link>
        </p>
      </form>
    </div>
  );
}