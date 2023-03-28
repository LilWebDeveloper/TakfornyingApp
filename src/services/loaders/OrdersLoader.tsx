import { getAuthToken } from "../../util/auth";
import { OrdersResData } from "../../interfaces/Order";
import { json } from "react-router-dom";

export default async function OrdersLoader() {
  const token = getAuthToken();

  const response = await fetch("http://localhost:5050/orders", {
    headers: {
      Authorization: "Bearer " + token,
    },
  });

  if (!response.ok) {
    return json({ message: "Could not fetch orders.", status: 500 });
  } else {
    const resData: OrdersResData = await response.json();
    return resData.orders;
  }
}
