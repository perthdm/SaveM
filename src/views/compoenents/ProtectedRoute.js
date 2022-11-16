import React from "react";
import { Outlet, Navigate } from "react-router-dom";

export const ProtectedRoute = () => {
  const auth = localStorage.getItem("xyz");
//   return auth ? <Outlet /> : <Navigate to="/login" replace />;
  return <Outlet />;
};
