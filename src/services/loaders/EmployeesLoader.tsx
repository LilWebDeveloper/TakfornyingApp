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
    throw new Error('Could not fetch employees!');
  } else {
    const resData: EmployeesResData = await response.json();
    return resData.employees;
  }
}
