import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

import { ProtectType } from "../interfaces/Protect";
import { StateType } from "../interfaces/StateTypes";

export const AdminProtect = ({
  children,
  redirectPath = "/dashboard",
}: ProtectType) => {
  const role = useSelector((state: StateType) => state.auth.role);

  if (role !== "Admin") {
    return <Navigate to={redirectPath} replace />;
  }

  return <>{children ? children : <Outlet />}</>;
};

export const ManagerProtect = ({
  children,
  redirectPath = "/dashboard",
}: ProtectType) => {
  const role = useSelector((state: StateType) => state.auth.role);

  if (role !== "Manager" && role !== "Admin") {
    return <Navigate to={redirectPath} replace />;
  }

  return <>{children ? children : <Outlet />}</>;
};
