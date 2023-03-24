import { useLoaderData } from "react-router-dom";

import OrdersList from "../../components/orders/OrdersList";
import OrderType from "../../interfaces/Order";

function OrdersPage() {
  const orders = useLoaderData() as OrderType;

  return <OrdersList orders={orders} />;
}

export default OrdersPage;

