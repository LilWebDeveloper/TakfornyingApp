import { useRouteLoaderData, useLoaderData } from "react-router-dom";
import OrderItem from "../../components/orders/OrderItem";
import OrdersList from "../../components/orders/OrdersList";
import OrderType, {
  EmployeeOrdersResData,
  OrdersResData,
} from "../../interfaces/Order";
import ErrorContent from "../Error";
import { useSelector } from "react-redux";
import { StateType } from "../../interfaces/StateTypes";
import EmployeeOrdersList from "../../components/orders/EmployeeOrdersList";

function OrderDetailPage() {
  const ordersData = useLoaderData() as OrdersResData;
  const order = useRouteLoaderData("order-detail") as OrderType;
  const employeeOrdersData = useRouteLoaderData(
    "employee-orders"
  ) as EmployeeOrdersResData;
  const role = useSelector((state: StateType) => state.auth.role);

  if (order.status === 500) {
    return <ErrorContent />;
  }

  if (role === "Employee") {
    return (
      <>
        <OrderItem order={order} />
        <EmployeeOrdersList
          orders={employeeOrdersData.orders}
          pagination={employeeOrdersData.pagination}
        />
        ;
      </>
    );
  } else {
    return (
      <>
        <OrderItem order={order} />
        <OrdersList
          orders={ordersData.orders}
          pagination={ordersData.pagination}
        />
      </>
    );
  }
}

export default OrderDetailPage;
