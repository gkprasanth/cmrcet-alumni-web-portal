import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { account } from "../utils/appwrite";

const Signup = () => {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Clear previous errors

    try {
      // Create a new account using Appwrite
      await account.create(
        "unique()", // Unique user ID
        formData.email,
        formData.password,
        formData.name
      );

      // Redirect to login page after successful signup
      navigate("/login");
    } catch (err) {
      setError(err.message); // Display error message
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('/path/to/your/background-image.jpg')" }}>
      <div className="bg-white bg-opacity-75 rounded-lg p-10 max-w-md w-full">
        <h1 className="text-4xl font-bold text-blue-600 text-center mb-8">Sign Up</h1>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="name" className="block text-lg font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="mt-2 block w-full px-6 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 text-lg"
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="email" className="block text-lg font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="mt-2 block w-full px-6 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 text-lg"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-lg font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="mt-2 block w-full px-6 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 text-lg"
              placeholder="Create a password"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Sign Up
          </button>
        </form>

        <p className="mt-6 text-center text-lg text-gray-600">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600 hover:underline text-lg">
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
