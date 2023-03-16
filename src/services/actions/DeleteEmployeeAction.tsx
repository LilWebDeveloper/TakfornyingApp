import { redirect } from "react-router-dom";
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
    throw new Error('Could not delete employee!');
  }

  return redirect("/dashboard/employees");
}
