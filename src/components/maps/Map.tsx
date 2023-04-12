import { useSelector } from "react-redux";
import { useLoaderData, useRouteLoaderData } from "react-router-dom";
import { StateType } from "../../interfaces/StateTypes";
import EmployeeMap from "./EmployeeMap";
import ManagerMap from "./ManagerMap";

const Map = () => {
  //all Addresses
  const orders: any = useLoaderData();

  //Employee addresses
  const employeeOrders: any = useRouteLoaderData("employee-orders-address");

  const role = useSelector((state: StateType) => state.auth.role);
  
  if(role === 'Employee'){
    return <EmployeeMap employeeAddresses={employeeOrders}/>
  } else return <ManagerMap allAddresses={orders} />;
};

export default Map;
