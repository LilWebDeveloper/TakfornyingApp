import { getAuthToken } from "../../utils/auth";
import { EmployeeOrdersResData } from "../../interfaces/Order";
import { json } from "react-router-dom";

export default async function EmployeeOrdersLoader() {
  const token = getAuthToken();

  const response = await fetch(
    `${process.env.REACT_APP_FETCH_ADDRESS!}/orders/employee/all`,
    {
      headers: {
        Authorization: "Bearer " + token,
      },
    }
  );

  if (!response.ok) {
    return json({ message: "Could not fetch employee orders.", status: 500 });
  } else {
    const resData: EmployeeOrdersResData = await response.json();
    return resData;
  }
}
