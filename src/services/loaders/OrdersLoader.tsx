import { getAuthToken } from "../../utils/auth";
import { OrdersResData } from "../../interfaces/Order";
import { json } from "react-router-dom";

export default async function OrdersLoader() {
  const token = getAuthToken();

  const response = await fetch("https://takfornying.onrender.com/orders", {
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


