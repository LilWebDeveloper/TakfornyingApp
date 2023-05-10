import { getAuthToken } from "../../utils/auth";
import { EmployeeOrdersResData } from "../../interfaces/Order";
import { json } from "react-router-dom";

export default async function EmployeeOrdersLoader({ request }: any) {
  const searchParams = new URL(request.url).searchParams;
  const p = searchParams.get("p");
  const token = getAuthToken();

  const response = await fetch(
    `${process.env.REACT_APP_FETCH_ADDRESS!}/orders/employee?p=${p}`,
    {
      headers: {
        Authorization: "Bearer " + token,
      },
    }
  );
  const resData: EmployeeOrdersResData = await response.json();
  if (!response.ok) {
    return json({ message: "Could not fetch employee orders.", status: 500 });
  } else {
    return resData;
  }
}
