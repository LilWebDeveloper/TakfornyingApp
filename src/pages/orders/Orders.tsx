import { useLoaderData } from "react-router-dom";

import OrdersList from "../../components/orders/OrdersList";

function OrdersPage() {
  const orders: any = useLoaderData();

  return <OrdersList orders={orders} />;
}

export default OrdersPage;

export async function loader() {
  const response = await fetch(
    "https://takfornyingmenagmentapp-default-rtdb.europe-west1.firebasedatabase.app/orders.json"
  );

  if (!response.ok) {
   
  } else {
    const resData = await response.json();

    const loadedOrders: any[] = [];

    for (const key in resData) {
      loadedOrders.push({
        id: key,
        address: resData[key].address,
        roofPaint: resData[key].roofPaint,
        roofSize: resData[key].roofSize,
        roofAngle: resData[key].roofAngle,
        description: resData[key].description,
      });
    }

    return loadedOrders;
  }
}
