import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { account } from "../utils/appwrite"; // Import your Appwrite instance
import { useUserStore } from "../store/userStore"; // Zustand store

// Function to check if the user is already logged in
const checkSession = async () => {
  try {
    const currentUser = await account.get(); // Fetch the current user data
    return currentUser;
  } catch (err) {
    console.error("Session check failed: ", err);
    return null; // If session check fails, return null
  }
};

// Function to log out the user and delete the session
const logoutUser = async () => {
  try {
    await account.deleteSession("current"); // Delete current session
    useUserStore.getState().clearUser(); // Clear user data from Zustand store
    console.log("User logged out successfully.");
  } catch (err) {
    console.error("Logout failed: ", err); // Handle any logout errors
  }
};

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState(""); // State for error message
  const navigate = useNavigate(); // Hook for navigation
  const setUserDetails = useUserStore((state) => state.setUser);

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle the form submission for login
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Check if the user is already logged in
      const currentUser = await checkSession();
      if (currentUser) {
        // If the user is logged in, update the Zustand store
        setUserDetails({
          email: currentUser.email,
          name: currentUser.name,
          userId: currentUser.$id,
        });
        navigate("/"); // Navigate to the homepage
        return;
      }

      // If no session, proceed with creating a new session
      await account.createEmailPasswordSession(formData.email, formData.password);
      const user = await account.get();
      setUserDetails({
        email: user.email,
        name: user.name,
        userId: user.$id,
      });
      navigate("/"); // Navigate to the home page after login
    } catch (err) {
      console.error(err); // Log the error for debugging
      setError(err.message || "An error occurred. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('/path/to/your/background-image.jpg')" }}>
      <div className="bg-white bg-opacity-75 rounded-lg p-10 max-w-md w-full">
        <h1 className="text-4xl font-bold text-blue-600 text-center mb-8">Login</h1>
        <form onSubmit={handleSubmit}>
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
              placeholder="Enter your password"
              required
            />
          </div>

          {/* Display error message */}
          {error && (
            <p className="mb-6 text-red-500 text-center font-medium">
              {error}
            </p>
          )}

          <button type="submit" className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300">
            Log In
          </button>
        </form>

        <p className="mt-6 text-center text-lg text-gray-600">
          Don't have an account?{" "}
          <Link to="/signup" className="text-blue-600 hover:underline text-lg">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
