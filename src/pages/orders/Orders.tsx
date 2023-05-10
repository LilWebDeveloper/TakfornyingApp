import { useSelector } from "react-redux";
import { useLoaderData, useRouteLoaderData } from "react-router-dom";

import EmployeeOrdersList from "../../components/orders/EmployeeOrdersList";
import OrdersList from "../../components/orders/OrdersList";

import { EmployeeOrdersResData, OrdersResData } from "../../interfaces/Order";
import { StateType } from "../../interfaces/StateTypes";

function OrdersPage() {
  const ordersData = useLoaderData() as OrdersResData;
  const employeeOrdersData = useRouteLoaderData("employee-orders") as EmployeeOrdersResData;
  const role = useSelector((state: StateType) => state.auth.role);

  if (role === "Employee") {
    return <EmployeeOrdersList orders={employeeOrdersData.orders} pagination={employeeOrdersData.pagination} />;
  } else return <OrdersList orders={ordersData.orders} pagination={ordersData.pagination}/>;
}

export default OrdersPage;
