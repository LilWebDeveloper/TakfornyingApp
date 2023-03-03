import { EmployeeResData } from "../../interfaces/Employee";

export default async function EmployeesLoader() {
    const response = await fetch(
      "http://localhost:5050/employees"
    );
  
    if (!response.ok) {
     //error
    } else {
      const resData: EmployeeResData = await response.json();
      return resData.employee;
    }
  }