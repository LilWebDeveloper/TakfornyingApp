import { json } from "react-router-dom";
import { EmployeesResData } from "../../interfaces/Employee";
import { getAuthToken } from "../../utils/auth";

export default async function SelectEmployeesLoader() {
  const token = getAuthToken();
  const response = await fetch("https://takfornying.onrender.com/employees/", {
    headers: {
      Authorization: "Bearer " + token,
    },
  });

  if (!response.ok) {
    return json({ message: "Could not fetch employees list.", status: 500 });
  } else {
    const resData: EmployeesResData = await response.json();
    return resData.employees;
  }
}
