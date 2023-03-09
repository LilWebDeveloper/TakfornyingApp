import { json } from "react-router-dom";
import { EmployeesResData } from "../../interfaces/Employee";
import { getAuthToken } from "../../util/auth";

export default async function EmployeesLoader() {
  const token = getAuthToken();
  const response = await fetch("http://localhost:5050/employees", {
    headers: {
      'Authorization': 'Bearer ' + token
    }
  });

  if (!response.ok) {
    throw json({message: 'Could not fetch event.'}, {status: 500})
  } else {
    const resData: EmployeesResData = await response.json();
    return resData.employees;
  }
}
