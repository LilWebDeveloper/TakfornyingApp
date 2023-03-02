import { json } from "react-router-dom";

export default async function EmployeeLoader({ request, params }: any) {
  const id = params.employeeId;

  const response = await fetch("http://localhost:5050/employees/" + id );

  if (!response.ok) {
    throw json(
      { message: "Could not fetch details for selected employee." },
      { status: 500 }
    );
  } else {
    const resData = await response.json();
    return resData.employee;
  }
}
