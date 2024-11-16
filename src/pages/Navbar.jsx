import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo-cms.png"
const Navbar = () => {
    return (
        <nav className="bg-white shadow-md px-6 py-4">
            <div className="container mx-auto flex justify-between items-center">

                <Link to="/"  >
                     
                        <img src={logo} alt="College Logo"   />
                        
            
                </Link>
                     <div className="flex items-center gap-4">
                    <Link
                        to="/signup"
                        className="text-sm md:text-base bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                    >
                        Sign Up
                    </Link>
                    <Link
                        to="/login"
                        className="text-sm md:text-base bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300 transition"
                    >
                        Log In
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
