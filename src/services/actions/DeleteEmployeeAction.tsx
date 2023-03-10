import { redirect, json } from "react-router-dom";
import { getAuthToken } from "../../util/auth";

export default async function DeleteEmployeeAction({ params }: any) {
  const employeeId: string = params.employeeId;
  const token = getAuthToken();
  const response = await fetch("http://localhost:5050/employees/" + employeeId, {
    method: "DELETE",
    headers: {
      'Authorization': 'Bearer ' + token
    }
  });

  if (!response.ok) {
    throw json({ message: "Could not delete employee." }, { status: 500 });
  }

  return redirect("/dashboard/employees");
}
