import React from "react";
import { Navigate } from "react-router-dom";
import { getCurrentUser } from "../api/authservice";

export default function PrivateRoute({ children }) {
  const isAuthenticated = getCurrentUser();

  return isAuthenticated ? children : <Navigate to="/login" replace />;
}
