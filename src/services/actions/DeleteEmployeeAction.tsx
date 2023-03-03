import { redirect, json } from "react-router-dom";

export default async function DeleteEmployeeAction({ params }: any) {
  const employeeId = params.employeeId;
  const response = await fetch("http://localhost:5050/employees/" + employeeId, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw json({ message: "Could not delete employee." }, { status: 500 });
  }

  return redirect("/dashboard/employees");
}
