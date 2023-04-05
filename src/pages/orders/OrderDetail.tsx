import { useRouteLoaderData, useLoaderData } from "react-router-dom";
import OrderItem from "../../components/orders/OrderItem";
import OrdersList from "../../components/orders/OrdersList";
import OrderType from "../../interfaces/Order";
import ErrorContent from "../Error";

function OrderDetailPage() {
  const orders = useLoaderData() as OrderType[];
  const order = useRouteLoaderData("order-detail") as OrderType;

  if(order.status === 500){
    return <ErrorContent />
  }

  return (
    <>
      <OrderItem order={order} />
      <OrdersList orders={orders} />
    </>
  );
}

export default OrderDetailPage;