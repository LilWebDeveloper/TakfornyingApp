import { useSelector } from "react-redux";
import { useLoaderData, useRouteLoaderData } from "react-router-dom";
import EmployeeOrdersList from "../../components/orders/EmployeeOrdersList";

import OrdersList from "../../components/orders/OrdersList";
import OrderType, { EmployeeOrderType } from "../../interfaces/Order";
import { StateType } from "../../interfaces/StateTypes";

function OrdersPage() {
  const orders = useLoaderData() as OrderType;
  const employeeOrders = useRouteLoaderData("employee-orders") as EmployeeOrderType;
  const role = useSelector((state: StateType) => state.auth.role);

  if (role === "Employee") {
    return <EmployeeOrdersList employeeOrders={employeeOrders} />;
  } else return <OrdersList orders={orders} />;
}

export default OrdersPage;
