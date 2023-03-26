import { getAuthToken } from "../../util/auth";
import { OrdersResData } from "../../interfaces/Order";

export default async function OrdersLoader() {
  const token = getAuthToken()

  const response = await fetch('http://localhost:5050/orders', {
    headers: {
      Authorization: "Bearer " + token,
    },
  });

  if (!response.ok) {
    throw new Error("Could not fetch orders!");
  } else {
    const resData: OrdersResData = await response.json();
    return resData.orders;
  }
}
