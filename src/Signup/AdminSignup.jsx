import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function AdminSignup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Signup Data:", formData);
    navigate("/adminlogin"); // ✅ Fixed routing
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-[#0D0B1F] font-baskerville">
      <form
        onSubmit={handleSubmit}
        className="bg-gradient-to-br from-[#2c003e] via-[#3b0a58] to-[#1a1a1a] p-8 rounded-2xl shadow-lg w-full max-w-md border border-white/20"
      >
        <h2 className="text-2xl font-baskerville text-white mb-6 text-center">
          Admin Signup
        </h2>

        <div className="mb-4">
          <label className="block text-white mb-1">Full Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your full name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded bg-white/20 text-white font-baskerville outline-none focus:ring-2 focus:ring-pink-500"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-white mb-1">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded bg-white/20 text-white font-baskerville outline-none focus:ring-2 focus:ring-pink-500"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block text-white mb-1">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded bg-white/20 text-white font-baskerville outline-none focus:ring-2 focus:ring-pink-500"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-[#f9e0ae] via-[#f7b267] to-[#d864a9] text-black font-baskerville py-2 rounded transition"
        >
          Sign Up
        </button>

        <p className="text-center text-white font-baskerville mt-4">
          Already have an account?{" "}
          <Link to="/adminlogin" className="text-pink-400 font-baskerville hover:underline">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}