import { getAuthToken } from "../../utils/auth";
import { OrdersResData } from "../../interfaces/Order";
import { json } from "react-router-dom";

export default async function EmployeeOrdersLoader() {
  const token = getAuthToken()

  const response = await fetch(`${process.env.REACT_APP_FETCH_ADDRESS!}/orders/employee`, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });

  if (!response.ok) {
    return json({ message: "Could not fetch employee orders.", status: 500 });
  } else {
    const resData: OrdersResData = await response.json();
    return resData;
  }
}