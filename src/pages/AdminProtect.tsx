import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom"

export const AdminProtect = ({children, redirectPath = '/dashboard'}: any) => {
    const role = useSelector((state: any) => state.auth.role)

  if(role !== 'Admin'){
    return <Navigate to={redirectPath} replace/>
  } 

  return children ? children : <Outlet />
} 

export const ManagerProtect = ({children, redirectPath = '/dashboard'}: any) => {
    const role = useSelector((state: any) => state.auth.role)

  if(role !== 'Manager' && role !== 'Admin'){
    return <Navigate to={redirectPath} replace/>
  } 

  return children ? children : <Outlet />
} 
