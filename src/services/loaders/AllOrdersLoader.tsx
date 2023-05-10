import { getAuthToken } from "../../utils/auth";
import { OrdersResData } from "../../interfaces/Order";
import { json } from "react-router-dom";

export default async function OrdersLoader() {
  const token = getAuthToken();
  const response = await fetch(
    `${process.env.REACT_APP_FETCH_ADDRESS!}/orders/all`,
    {
      headers: {
        Authorization: "Bearer " + token,
      },
    }
  );
  const resData: OrdersResData = await response.json();

  if (!response.ok) {
    return json({ message: "Could not fetch orders.", status: 500 });
  } else {
    return resData.orders;
  }
}
