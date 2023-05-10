import { redirect } from "react-router-dom";
import { ManipulateEmployeeType } from "../../interfaces/ManipulateActions";
import { getAuthToken } from "../../utils/auth";

export default async function ManipulateEmployeeAction({
  request,
  params,
}: ManipulateEmployeeType) {
  const method = request.method;

  const data = await request.formData();

  const employeeData = {
    firstName: data.get("firstName"),
    secondName: data.get("secondName"),
    jobPosition: data.get("jobPosition"),
    dNumber: data.get("dNumber"),
    login: data.get("userLogin"),
    password: data.get("password"),
  };

  let url = `${process.env.REACT_APP_FETCH_ADDRESS!}/employees`;

  if (method === "PATCH") {
    const employeeId = params.employeeId;
    url = `${process.env.REACT_APP_FETCH_ADDRESS!}/employees/` + employeeId;
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

  return redirect("/dashboard/employees?p=1");
}
