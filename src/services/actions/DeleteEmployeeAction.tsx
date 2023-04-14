import { redirect } from "react-router-dom";
import { EmployeeParamsType } from "../../interfaces/ParamsTypes";
import { getAuthToken } from "../../utils/auth";



export default async function DeleteEmployeeAction({ params }: EmployeeParamsType) {
  const employeeId = params.employeeId;
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
