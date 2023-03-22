import { getAuthToken } from "../../util/auth";
import jwtDecode from "jwt-decode";
import { OrdersResData } from "../../interfaces/Order";

export default async function OrdersLoader() {
  const token = getAuthToken()!;
  const decode: any = jwtDecode(token); // usunąć wykrzyknik 
  const employeePermission = decode.employeePermission;

  let url = "http://localhost:5050/orders"

  if(employeePermission === 'Employee'){
    url = "http://localhost:5050/orders/employee"
  }

  const response = await fetch(url, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });

  if (!response.ok) {
    throw new Error('Could not fetch orders!');
  } else {
    const resData: OrdersResData = await response.json();
    return resData.orders;
  }
}
