import { EmployeesResData } from "../../interfaces/Employee";
import { getAuthToken } from "../../util/auth";

export default async function SelectEmployeesLoader() {
  const token = getAuthToken();
  const response = await fetch("http://localhost:5050/employees/", {
    headers: {
      Authorization: "Bearer " + token,
    },
  });

  if (!response.ok) {
    //error
  } else {
    const resData: EmployeesResData = await response.json();
    return resData.employees;
  }
}
