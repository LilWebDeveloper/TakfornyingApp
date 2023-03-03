import { json } from "react-router-dom";

export default async function EmployeeLoader({ params }: any) {
  const id: string = params.employeeId;

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
