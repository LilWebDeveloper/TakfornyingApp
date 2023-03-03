import { json } from "react-router-dom";
import { EmployeesResData } from "../../interfaces/Employee";

export default async function EmployeesLoader() {
  const response = await fetch("http://localhost:5050/employees");

  if (!response.ok) {
    throw json({message: 'Could not fetch event.'}, {status: 500})
  } else {
    const resData: EmployeesResData = await response.json();
    return resData.employees;
  }
}
