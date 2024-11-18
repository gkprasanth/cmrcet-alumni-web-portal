import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute1 = ({ user }) => {
  // Check if the logged-in user is the admin
  if (user?.email !== "admin@gmail.com") {
    return <Navigate to="/" replace />;
  }
  return <Outlet />;
};

export default ProtectedRoute1;
