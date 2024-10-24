import React from "react";
import { Outlet, Navigate } from "react-router-dom";

function PrivateRoutes() {
  const islogged = localStorage.getItem("User_Token");
  return islogged ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateRoutes;
