// src/components/ProtectedRoute.js
import React from "react";
import { Navigate } from "react-router-dom"; // For React Router v6
import { useUserStore } from "../store/userStore"; // Zustand store

const ProtectedRoute = ({ element, ...rest }) => {
  const isLoggedIn = useUserStore((state) => state.isLoggedIn); // Zustand: Get login status
  
  if (!isLoggedIn) {
    // Redirect to login page if not logged in
    return <Navigate to="/login" />;
  }

  // Render the protected route if logged in
  return React.cloneElement(element, { ...rest });
};

export default ProtectedRoute;
