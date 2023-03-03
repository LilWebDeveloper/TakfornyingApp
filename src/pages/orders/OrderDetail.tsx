import { useRouteLoaderData, useLoaderData } from "react-router-dom";
import OrderItem from "../../components/orders/OrderItem";
import OrdersList from "../../components/orders/OrdersList";

function OrderDetailPage() {
  const orders = useLoaderData();
  const order = useRouteLoaderData("order-detail");
  return (
    <>
      <OrderItem order={order} />
      <OrdersList orders={orders} />
    </>
  );
}

export default OrderDetailPage;