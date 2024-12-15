/* import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, role }) => {
  const token = localStorage.getItem("token");
  const userRole = localStorage.getItem("role");

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  if (role && userRole !== role) {
    // Redirect unauthorized users
    return <Navigate to="/home" replace />;
  }

  return children; // Render the component if authorized
};

export default ProtectedRoute;
 */