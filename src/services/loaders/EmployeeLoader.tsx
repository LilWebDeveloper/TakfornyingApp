import { json } from "react-router-dom";
import { EmployeeResData } from "../../interfaces/Employee";
import { getAuthToken } from "../../util/auth";

export default async function EmployeeLoader({ params }: any) {
  const id: string = params.employeeId;
  const token = getAuthToken();
  const response = await fetch("http://localhost:5050/employees/" + id, {
    headers: {
      'Authorization': 'Bearer ' + token
    }
  } );

  if (!response.ok) {
    throw json(
      { message: "Could not fetch details for selected employee." },
      { status: 500 }
    );
  } else {
    const resData: EmployeeResData = await response.json();
    return resData.employee;
  }
}
