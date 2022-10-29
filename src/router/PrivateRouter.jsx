import React from "react";
import { useEffect } from "react";
import { Navigate, Outlet, useLocation, useParams } from "react-router-dom";

const PrivateRouter = () => {
  const location = useLocation();
  const { state } = useParams();

  // const user = localStorage.getItem("email");

  return <Outlet />;
};

export default PrivateRouter;
