import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo-cms.png";
import { useUserStore } from "../store/userStore";
import { account } from "../utils/appwrite";
 
export const handleLogout = async () => {
    try {
      const { isLoggedIn } = useUserStore.getState();
      
      if (!isLoggedIn) {
        console.error("User is not logged in.");
        return; // Early return if user is not logged in
      }
  
      // Attempt to delete the session
      await account.deleteSession("current"); // Ensure that the user is logged in and has the right scope
      
      // Clear Zustand state after successful logout
      const { clearUser } = useUserStore.getState();
      clearUser();
      
      // Optionally, reload the page after successful logout
      window.location.reload();
      
    } catch (error) {
      console.error("Logout failed:", error);
      if (error.message.includes("missing scope")) {
        alert("You are not authorized to perform this action. Please log in first.");
      }
    }
  };;


const Navbar = () => {
  // Fetch user data from Zustand store
  const { name } = useUserStore();

  return (
    <nav className="bg-white shadow-md px-6 py-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/">
          <img src={logo} alt="College Logo" className="h-10" />
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center gap-4">
          {name ? (
            // Show username and logout button if logged in
            <div className="flex items-center gap-4">
              <span className="text-sm md:text-base text-gray-800 font-medium">
                Welcome, {name}
              </span>
              <button
                onClick={handleLogout}
                className="text-sm md:text-base bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
              >
                Log Out
              </button>
            </div>
          ) : (
            // Show Sign Up and Log In links if not logged in
            <>
              <Link
                to="/signup"
                className="text-sm md:text-base bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Sign Up
              </Link>
              <Link
                to="/login"
                className="text-sm md:text-base bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300 transition"
                onClick={handleLogout}
             
             >
                Log In
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
