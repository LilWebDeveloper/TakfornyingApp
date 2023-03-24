import { getAuthToken } from "../../util/auth";
import { OrdersResData } from "../../interfaces/Order";
import { useSelector } from "react-redux";
import { StateType } from "../../interfaces/StateTypes";

export default async function OrdersLoader() {
  const token = getAuthToken()
  const role = useSelector((state: StateType) => state.auth.role);

  let url = "http://localhost:5050/orders";

  if (role === "Employee") {
    url = "http://localhost:5050/orders/employee";
  }

  const response = await fetch(url, {
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
