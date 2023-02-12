import { useLoaderData } from "react-router-dom";

import OrdersList from "../../components/OrdersList";

function OrdersPage() {
  const orders: any = useLoaderData();

  if (orders.isError) {
    return <p>{orders.message}</p>;
  }

  return <OrdersList orders={orders} />;
}

export default OrdersPage;

export async function loader() {
  const response = await fetch(
    "https://takfornyingmenagmentapp-default-rtdb.europe-west1.firebasedatabase.app/orders.json"
  );

  if (!response.ok) {
    return { isError: true, message: "Could not fetch orders." };
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
