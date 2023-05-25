import { json } from "react-router-dom";
import { EmployeesResData } from "../../interfaces/Employee";
import { getAuthToken } from "../../utils/auth";

export default async function EmployeesLoader({ request }: { request: Request }) {
  const searchParams = new URL(request.url).searchParams;
  const p = searchParams.get('p')
  const token = getAuthToken();
  const response = await fetch(
    `${process.env.REACT_APP_FETCH_ADDRESS!}/employees?p=${p}`,
    {
      headers: {
        Authorization: "Bearer " + token,
      },
    }
  );

  if (!response.ok) {
    return json({ message: "Could not fetch employees list.", status: 500 });
  } else {
    const resData: EmployeesResData = await response.json();
    return resData;
  }
}
