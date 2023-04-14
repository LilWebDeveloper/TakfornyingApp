import { getAuthToken } from "../../util/auth";
import { OrdersResData } from "../../interfaces/Order";
import { json } from "react-router-dom";

export default async function EmployeeOrdersLoader() {
  const token = getAuthToken()

  const response = await fetch("https://takfornying.onrender.com/orders/employee", {
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