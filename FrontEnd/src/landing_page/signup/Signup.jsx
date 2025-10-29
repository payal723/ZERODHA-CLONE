
import React, { useState } from "react";
import { Mail, User, Lock } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch("https://zerodha-clone-6al2.onrender.com/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        alert("Signup successful! Please login.");
        navigate("/login"); 
      } else {
        setError(data.message || "Signup failed");
      }
    } catch (err) {
      console.error(err);
      setError("Something went wrong");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md border border-gray-200">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">
          Create Account
        </h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* ... input fields ... */}
          <div className="relative">
            <Mail className="absolute left-3 top-3 text-gray-400" />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full pl-10 pr-4 py-2 rounded-lg bg-gray-100 border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="relative">
            <User className="absolute left-3 top-3 text-gray-400" />
            <input
              type="text"
              name="username"
              placeholder="Username"
              className="w-full pl-10 pr-4 py-2 rounded-lg bg-gray-100 border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>

          <div className="relative">
            <Lock className="absolute left-3 top-3 text-gray-400" />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="w-full pl-10 pr-4 py-2 rounded-lg bg-gray-100 border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          {error && <p className="text-red-500 text-center">{error}</p>}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold transition duration-200"
          >
            Sign Up
          </button>
        </form>
        <p className="text-gray-600 text-center mt-5">
          Already have an account?{" "}
          <a href="/login" className="text-blue-600 hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default Signup;