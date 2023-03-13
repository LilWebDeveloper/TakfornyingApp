import { getAuthToken } from "../../util/auth";
import jwtDecode from "jwt-decode";

export default async function OrdersLoader() {
  const token: any = getAuthToken();
  const decode: any = jwtDecode(token);
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
    //error
  } else {
    const resData = await response.json();
    return resData.orders;
  }
}
