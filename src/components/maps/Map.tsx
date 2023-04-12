import { useSelector } from "react-redux";
import { useLoaderData, useRouteLoaderData } from "react-router-dom";
import { StateType } from "../../interfaces/StateTypes";
import EmployeeMap from "./EmployeeMap";
import ManagerMap from "./ManagerMap";
import { EmployeeOrderType, OrderType } from "../../interfaces/Order";

const Map = () => {
  const orders = useLoaderData() as OrderType[];
  const employeeOrders = useRouteLoaderData("employee-orders-address") as EmployeeOrderType;

  const role = useSelector((state: StateType) => state.auth.role);
  
  if(role === 'Employee'){
    return <EmployeeMap employeeAddresses={employeeOrders}/>
  } else return <ManagerMap allAddresses={orders} />;
};

export default Map;
