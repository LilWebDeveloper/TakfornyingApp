import { redirect } from "react-router-dom";
import { getAuthToken } from "../../util/auth";

export default async function ManipulateEmployeeAction({
  request,
  params,
}: any) {
  const method: string = request.method;

  const data = await request.formData();

  const employeeData = {
    firstName: data.get("firstName"),
    secondName: data.get("secondName"),
    jobPosition: data.get("jobPosition"),
    dNumber: data.get("dNumber"),
    login: data.get("userLogin"),
    password: data.get("password"),
  };

  let url = "http://localhost:5050/employees";

  if (method === "PATCH") {
    const employeeId: string = params.employeeId;
    url = "http://localhost:5050/employees/" + employeeId;
  }

  const token = getAuthToken();

  const response = await fetch(url, {
    method: method,
    headers: {
      "Content-Type": "application/json",
      'Authorization': 'Bearer ' + token
    },
    body: JSON.stringify(employeeData),
  });

  if (!response.ok) {
    throw new Error('Could not send employee!');
  }

  return redirect("/dashboard/employees");
}
