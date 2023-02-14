import { useLoaderData } from "react-router-dom";

import OrdersList from "../../components/orders/OrdersList";

function OrdersPage() {
  const orders: any = useLoaderData();

  return <OrdersList orders={orders} />;
}

export default OrdersPage;

